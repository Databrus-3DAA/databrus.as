import mysql from 'serverless-mysql';

export const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        port: parseInt(process.env.MYSQL_PORT!),
    }
});

export async function query(q: string, params: (string | number)[] | string | number = []) {
    try {
        const res = await db.query(q, params);
        await db.end();
        return res;
    } catch (e) {
        if(e instanceof Error) throw Error(e.message);
    };
};