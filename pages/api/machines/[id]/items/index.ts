import { NextApiHandler } from "next";
import { query } from "@lib/db";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const handler: NextApiHandler = async(req, res) => {
    const { id } = req.query;

    if(!id) return res.status(400).json({ message: '`id` required' });

    try {
        const result = await query(`SELECT * FROM machine_items WHERE machineId = ?`, id);
        return res.json(result);
    } catch(e) {
        if(e instanceof Error) res.status(500).json({ message: e.message });
    };
};

export default handler;