import { NextApiHandler } from "next";
import { prisma } from "@lib/prisma";
import { Item } from "@prisma/client";
import { Stock } from "@lib/types";

const handler: NextApiHandler = async(_, res) => {
    try {
        let stock: Stock[] = [];
        const result = await prisma.item.findMany();

        result.forEach((item: Item) => {
            if(stock.filter(s => s.label === item.label).length === 0) {
                stock.push({
                    label: item.label,
                    stock: item.stock,
                });
            } else {
                stock[stock.findIndex(s => s.label === item.label)].stock += item.stock;
            }
        });

        return res.json(stock);
    } catch(e) {
        if(e instanceof Error) res.status(500).json({ message: e.message });
    };
};

export default handler;