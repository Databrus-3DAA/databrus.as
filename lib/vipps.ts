import VippsClient from "./class/vipps";

declare global {
	var vipps: VippsClient | undefined;
}

export const Vipps = new VippsClient({
	test: process.env.NODE_ENV === 'development',
	clientId: process.env.VIPPS_CLIENT_ID!,
	clientSecret: process.env.VIPPS_CLIENT_SECRET!,
	subKey: process.env.VIPPS_SUB_KEY!,
});

if(process.env.NODE_ENV !== 'production') global.vipps = Vipps;