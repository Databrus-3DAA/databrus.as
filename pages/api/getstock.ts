import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma";
import { Item } from "@prisma/client";
import { Stock } from "@lib/types";

const handler: NextApiHandler = async(_, res) => {
    try {
        let stock: Stock = {}
        const result = await prisma.item.findMany();

        result.forEach((item: Item) => {
            if(!stock[item.label]) {
                stock[item.label] = 0;
            }

            stock[item.label] += Number(item.stock);
        });

        return res.json(stock);
    } catch(e) {
        if(e instanceof Error) res.status(500).json({ message: e.message });
    };
};

export default handler;