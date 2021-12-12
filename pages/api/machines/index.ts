import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma"; 

const handler: NextApiHandler = async(_, res) => {
    try {
        const result = await prisma.machine.findMany();
        return res.json(result);
    } catch(e) {
        if(e instanceof Error) res.status(500).json({ message: e.message });
    };
};

export default handler;