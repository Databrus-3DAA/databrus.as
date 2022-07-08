import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma"; 

const handler: NextApiHandler = async(req, res) => {
	if(req.method != "GET") return res.status(405).json({error: "Method not allowed"});

	try {
		const result = await prisma.machine.findMany();
		return res.json(result);
	} catch(e) {
		if(e instanceof Error) res.status(500).json({ message: e.message });
	};
};

export default handler;