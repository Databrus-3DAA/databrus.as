import { NextApiHandler } from "next";
import { query } from "@lib/db";

const handler: NextApiHandler = async(req, res) => {
    const { id } = req.query

    if(!id) return res.status(400).json({ message: '`id` required' });

    try {        
        const results: any = await query(`SELECT * FROM machines WHERE id = ?`, id);
        return res.json(results[0]);
    } catch (e) {
        if(e instanceof Error) res.status(500).json({ message: e.message });
    };
};

export default handler;