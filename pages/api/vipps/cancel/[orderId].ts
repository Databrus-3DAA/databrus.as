import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma"; 
import { Vipps } from "@lib/vipps";

const handler: NextApiHandler = async(req, res) => {
	const { orderId } = req.query;

	if(!orderId) return res.status(400).json({ message: '`orderId` is required' });
	if(typeof orderId != "string") return res.status(400).json({ message: '`orderId` must be a string' });

	try {
		const result = await Vipps.cancel(orderId, {
			merchantInfo: {
				merchantSerialNumber: '232355',
			}, 
			transaction: {
				transactionText: 'Test',
			}
		});
		console.log(result);
		res.json(result);
	} catch(e) {
		if(e instanceof Error) res.status(500).json({ message: e.message });
	}
};

export default handler;