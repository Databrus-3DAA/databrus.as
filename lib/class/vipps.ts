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
	url: string;
	subKey: string;
	clientId: string;
	clientSecret: string;

	constructor(cfg: VippsCfg) {
		this.url = cfg.test ? 'https://apitest.vipps.no' : 'https://api.vipps.no';
		this.subKey = cfg.subKey;
		this.clientId = cfg.clientId;
		this.clientSecret = cfg.clientSecret;
	};

	async vippsAccessToken() {
		try {
			const res = await fetch(`${this.url}/accessToken/get`, {
				method: 'POST',
				headers: {
					'client_id': this.clientId,
					'client_secret': this.clientId,
					'Ocp-Apim-Subscription-Key': this.subKey
				}
			}).then(data => data.json());

			return res.access_token;
		} catch (e) {
			if(e instanceof Error) throw Error(e.message);
		};
	};

	async fetch({ uri, body, method = 'POST' }: any) {
		const token = await this.vippsAccessToken();

		try {
			const res = await fetch(`${this.url}${uri}`, {
				method,
				headers: {
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

	initiatePayment(order: OrderInfo) {
		return this.fetch({ uri: '/ecomm/v2/payments', body: order });
	};
	
	capture(orderId: string, body: CaptureCancelRefundInfo) {
		return this.fetch({ uri: `/ecomm/v2/payments/${orderId}/capture`, body});
	};

	cancel(orderId: string, body: CaptureCancelRefundInfo) {
		return this.fetch({ uri: `/ecomm/v2/payments/${orderId}/cancel`, body});
	};

	refund (orderId: string, body: CaptureCancelRefundInfo) {
		return this.fetch({ uri: `/ecomm/v2/payments/${orderId}/refund`, body });
	};
	
	getOrderDetails (orderId: string) {
		return this.fetch({ uri: `/ecomm/v2/payments/${orderId}/details`, method: 'GET' });
	};
};