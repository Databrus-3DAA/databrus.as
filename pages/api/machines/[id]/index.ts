import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma";

const handler: NextApiHandler = async (req, res) => {
	if(req.method != "GET") return res.status(405).json({error: "Method not allowed"});

	const { id } = req.query

	if(!Number(id)) return res.status(400).json({ message: '`id` must be a number' });
	if(Number(id) < 1) return res.status(400).json({ message: '`id` must be a positiv number' });

	try {
		const result = await prisma.machine.findFirst({ where: { id: Number(id) } });
		return result ? res.json(result) : res.status(400).json({ message: 'Machine not found' });
	} catch(e) {
		if(e instanceof Error) res.status(500).json({ message: e.message });
	};
};

export default handler;