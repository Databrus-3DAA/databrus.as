import { prisma } from "@lib/prisma";

export interface VippsCfg {
	test: boolean,
	subKey: string,
	clientId: string,
	clientSecret: string,
};

export interface OrderInfo {
	customerInfo: {
		mobileNumber: string,
	},

	merchantInfo: {
		callbackPrefix: string,
		fallBack: string,
		merchantSerialNumber: string,
	},

	transaction: {
		amount: number,
		orderId: string,
		transactionText: string,
	}
};

export interface CaptureCancelRefundInfo {
	merchantInfo: {
		merchantSerialNumber: string,
	}

	transaction: {
		amount?: number,
		transactionText: string,
	}
};

export default class VippsClient {
	private url: string;
	private subKey: string;
	private clientId: string;
	private clientSecret: string;

	private token: string | null = null;
	private tokenExpiresAt: number = 0;

	constructor(cfg: VippsCfg) {
		this.url = cfg.test ? 'https://apitest.vipps.no' : 'https://api.vipps.no';
		this.subKey = cfg.subKey;
		this.clientId = cfg.clientId;
		this.clientSecret = cfg.clientSecret;
	};

	async vippsAccessToken() {
		if(this.token && this.tokenExpiresAt > new Date().getTime()) return this.token;

		const res = await fetch(`${this.url}/accessToken/get`, {
			method: 'POST',
			headers: {
				'client_id': this.clientId,
				'client_secret': this.clientId,
				'Ocp-Apim-Subscription-Key': this.subKey
			}
		}).then(data => data.json());

		if(res.error) throw Error(res.error);

		this.token = res.access_token;
		this.tokenExpiresAt = new Date().getTime() + (res.expires_in * 1000);

		return res.access_token;
	};

	private async fetch({ uri, body, method = 'POST' }: any) {
		const token = await this.vippsAccessToken();

		try {
			const res = await fetch(`${this.url}${uri}`, {
				method,
				headers: {
					'Merchant-Serial-Number': '232355',
					'Vipps-System-Name': 'databrus',
					'Vipps-System-Version': '0.1',
					'Content-Type': 'application/json',
					'Ocp-Apim-Subscription-Key': this.subKey,
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify(body)
			});

			return res.json();
		} catch (e) {
			if(e instanceof Error) throw Error(e.message);
		};
	};

	async generateOrderInfo(phone: string) {
		const codes = (await prisma.orders.findMany({ where: { phone } })).map(order => order.code);
		const orderIds = (await prisma.orders.findMany()).map(order => order.id);

		let orderId: string = `232355-databrus-${Math.floor(Math.random() * (999999 - 10000 + 1)) + 10000}`;
		while(orderIds.includes(orderId)) orderId = `232355-databrus-${Math.floor(Math.random() * (999999 - 100000 + 1)) + 10000}`;

		let code: string = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
		while(codes.includes(code)) code = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();

		return [code, orderId];
	};

	async initiate(order: OrderInfo) {
		return await this.fetch({ uri: '/ecomm/v2/payments', body: order });
	};

	async capture(orderId: string, body: CaptureCancelRefundInfo) {
		return await this.fetch({ uri: `/ecomm/v2/payments/${orderId}/capture`, body});
	};

	async cancel(orderId: string, body: CaptureCancelRefundInfo) {
		return await this.fetch({ uri: `/ecomm/v2/payments/${orderId}/cancel`, body});
	};

	async refund (orderId: string, body: CaptureCancelRefundInfo) {
		return await this.fetch({ uri: `/ecomm/v2/payments/${orderId}/refund`, body });
	};

	async details (orderId: string) {
		return await this.fetch({ uri: `/ecomm/v2/payments/${orderId}/details`, method: 'GET' });
	};
};