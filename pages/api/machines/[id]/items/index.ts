import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma";

const handler: NextApiHandler = async(req, res) => {
	if(req.method != "GET") return res.status(405).json({error: "Method not allowed"});

	const { id } = req.query;

	if(!Number(id)) return res.status(400).json({ message: '`id` must be a number' });
	if(Number(id) < 1) return res.status(400).json({ message: '`id` must be a positiv number' });

	try {
		if(!(await prisma.machine.findFirst({ where: { id: Number(id) } }))) return res.status(400).json({ message: 'Machine not found' });
		const result = await prisma.item.findMany({ where: { machineId: Number(id) } });
		return res.json(result);
	} catch(e) {
		if(e instanceof Error) res.status(500).json({ message: e.message });
	};
};

export default handler;