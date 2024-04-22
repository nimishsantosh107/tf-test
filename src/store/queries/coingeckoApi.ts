import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoingeckoVsCurrencies, CoingeckoMarketData, CoingeckoMarketChartData } from "./types";

const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY || undefined;

if (!COINGECKO_API_KEY) throw new Error("COINGECKO_API_KEY unavailable");

export const coingeckoApi = createApi({
    reducerPath: "coingeckoApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${COINGECKO_BASE_URL}` }),
    endpoints: (builder) => ({
        // get all supported vsCurrencies
        getAllVsCurrencies: builder.query<CoingeckoVsCurrencies, {}>({
            query: ({}) => ({
                url: `/simple/supported_vs_currencies `,
                method: "GET",
                headers: { "x-cg-demo-api-key": COINGECKO_API_KEY },
            }),
        }),
        // returns top50 markets sorted by marketCap for a particular vsCurrency
        getAllMarkets: builder.query<CoingeckoMarketData[], { vsCurrency: string }>({
            query: ({ vsCurrency }) => ({
                url: `/coins/markets?vs_currency=${vsCurrency.toLowerCase()}&order=market_cap_desc&per_page=50&page=1`,
                method: "GET",
                headers: { "x-cg-demo-api-key": COINGECKO_API_KEY },
            }),
        }),
        // returns markets by id for a particular vsCurrency
        getMarketById: builder.query<CoingeckoMarketData[], { id: string; vsCurrency: string }>({
            query: ({ id, vsCurrency }) => ({
                url: `/coins/markets?vs_currency=${vsCurrency.toLowerCase()}&ids=${id.toLowerCase()}`,
                method: "GET",
                headers: { "x-cg-demo-api-key": COINGECKO_API_KEY },
            }),
        }),
        // returns market chartData by id for a particular vsCurrency for past N days
        getMarketChatDataById: builder.query<
            CoingeckoMarketChartData,
            { id: string; vsCurrency: string; days: number }
        >({
            query: ({ id, vsCurrency, days }) => ({
                url: `https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}/market_chart?vs_currency=${vsCurrency.toLowerCase()}&days=${days}&interval=daily`,
                method: "GET",
                headers: { "x-cg-demo-api-key": COINGECKO_API_KEY },
            }),
        }),
    }),
});
