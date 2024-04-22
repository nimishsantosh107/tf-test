import type { NextApiRequest, NextApiResponse } from "next";
import { coingeckoApi } from "@/server";
import type { CoingeckoMarketChartData } from "@/server/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CoingeckoMarketChartData>
) {
    try {
        if (req.method === "GET") {
            const axiosRes = await coingeckoApi.get(
                `/coins/${req.query.id}/market_chart?vs_currency=${req.query.vs_currency}&days=${req.query.days}&interval=daily`
            );
            res.status(200).send(axiosRes.data);
        } else throw new Error("incorrect method");
    } catch (error) {
        res.status(400);
    }
}
