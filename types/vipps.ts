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