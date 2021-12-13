import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma";

const handler: NextApiHandler = async(req, res) => {
	const { id, product } = req.query;

	if(!Number(id)) return res.status(400).json({ message: '`id` must be a number' });
	if(Number(id) < 1) return res.status(400).json({ message: '`id` must be a positiv number' });
	if(typeof product !== "string") return res.status(400).json({ message: '`product` must be a string' });
	if(!(/^[a-åA-Å]+$/.test(product as string))) return res.status(400).json({ message: 'Invalid product name characters' })

	try {
		const result = await prisma.item.findFirst({ where: { name: product, machineId: Number(id) } });
		return res.json(result);
	} catch (e) {
		if(e instanceof Error) res.status(500).json({ message: e.message });
	};
};

export default handler;