import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma"; 

const handler: NextApiHandler = async(req, res) => {
	if(req.method != "POST") return res.status(405).json({error: "Method not allowed"});

	const data = req.body;
	console.log(data);
};

export default handler;