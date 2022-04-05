import { NextApiHandler } from "next"; 
import { prisma } from "@lib/prisma";
import { Vipps } from "@lib/vipps";

const handler: NextApiHandler = async (req, res) => {
	// if(req.method != "POST") return res.status(405).json({error: "Method not allowed"});

	try {
		const data = req.body;

		if(!data.phone) return res.status(400).json({ message: '`phone` is required' });
		if(!data.product) return res.status(400).json({ message: '`product` is required' });
		if(!data.machineId) return res.status(400).json({ message: '`machineId` is required' });

		const product = await prisma.item.findFirst({ where: { name: data.product, machineId: parseInt(data.machineId) }});

		if(!product) return res.status(400).json({ message: 'Item not found' });

		const [ code, orderId ] = await Vipps.generateOrderInfo('46839956');
		console.log(code, orderId);

		const result = await Vipps.initiate({
			customerInfo: { mobileNumber: req.body.phone },
			merchantInfo: {
				callbackPrefix: process.env.VIPPS_CALLBACK_PREFIX!,
				fallBack: process.env.VIPPS_FALLBACK!,
				merchantSerialNumber: '232355',
			},
			transaction: {
				orderId: orderId,
				amount: req.body.amount,
				transactionText: req.body.transactionText,
			}
		});

		res.json({ message: "Hello World" });
	} catch(e) {
		if(e instanceof Error) res.status(500).json({ message: e.message });
	};
}

export default handler;