import type { NextApiRequest, NextApiResponse } from "next";
import { coingeckoApi } from "@/server";
import type { CoingeckoMarketData } from "@/server/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<CoingeckoMarketData[]>) {
    try {
        if (req.method === "GET") {
            let axiosRes;
            if (req.query.id) {
                // return by ID
                axiosRes = await coingeckoApi.get(
                    `/coins/markets?vs_currency=${req.query.vs_currency}&ids=${req.query.id}`
                );
            } else {
                // return top 50 sorted by marketCap
                axiosRes = await coingeckoApi.get(
                    `/coins/markets?vs_currency=${req.query.vs_currency}&order=market_cap_desc&per_page=50&page=1`
                );
            }
            res.status(200).send(axiosRes.data);
        } else throw new Error("incorrect method");
    } catch (error) {
        res.status(400);
    }
}
