import type { NextApiRequest, NextApiResponse } from "next";
import { coingeckoApi } from "@/server";
import type { CoingeckoVsCurrencies } from "@/server/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<CoingeckoVsCurrencies>) {
    try {
        if (req.method === "GET") {
            const axiosRes = await coingeckoApi.get("/simple/supported_vs_currencies");
            res.status(200).send(axiosRes.data);
        } else throw new Error("incorrect method");
    } catch (error) {
        res.status(400);
    }
}
