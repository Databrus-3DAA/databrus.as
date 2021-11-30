import { NextApiHandler } from "next";
import { query } from "@lib/db";

const handler: NextApiHandler = async(req, res) => {
    const { product } = req.query;

    if(!(/^[A-ZÆØÅ]/.test(product as string))) return res.status(400).json({ message: 'Invalid product name' })

    try {
        const results: any = await query(`SELECT * FROM machine_items WHERE name = ?`, product);
        return res.json(results[0]);
    } catch (e) {
        if(e instanceof Error) res.status(500).json({ message: e.message });
    };
};

export default handler;