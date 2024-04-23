import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoingeckoVsCurrencies, CoingeckoMarketData, CoingeckoMarketChartData } from "./types";
import defaultConfig from "@/config";

export const coingeckoApi = createApi({
    reducerPath: "coingeckoApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${defaultConfig.NEXTJS_PROXY_URL}` }),
    endpoints: (builder) => ({
        // get all supported vsCurrencies
        getAllVsCurrencies: builder.query<CoingeckoVsCurrencies, void>({
            query: () => ({
                url: `/simple/supported_vs_currencies `,
                method: "GET",
            }),
        }),
        // returns top50 markets sorted by marketCap for a particular vsCurrency
        getAllMarkets: builder.query<CoingeckoMarketData[], { vsCurrency: string }>({
            query: ({ vsCurrency }) => ({
                url: `/coins/markets?vs_currency=${vsCurrency.toLowerCase()}`,
                method: "GET",
            }),
        }),
        // returns markets by id for a particular vsCurrency
        getMarketById: builder.query<CoingeckoMarketData, { id: string; vsCurrency: string }>({
            query: ({ id, vsCurrency }) => ({
                url: `/coins/markets?vs_currency=${vsCurrency.toLowerCase()}&id=${id.toLowerCase()}`,
                method: "GET",
            }),
            transformResponse: (responseData: CoingeckoMarketData[]) => responseData[0],
        }),
        // returns market chartData by id for a particular vsCurrency for past N days
        getMarketChatDataById: builder.query<
            { time: string; value: number }[],
            { id: string; vsCurrency: string; days: number }
        >({
            query: ({ id, vsCurrency, days }) => ({
                url: `/coins/market_chart?id=${id.toLowerCase()}&vs_currency=${vsCurrency.toLowerCase()}&days=${days}`,
                method: "GET",
            }),
            transformResponse: (responseData: CoingeckoMarketChartData, meta, args) =>
                responseData.prices
                    .filter((item, index) => index != args.days - 1)
                    .map((item) => ({
                        time: new Date(item[0]).toJSON(),
                        value: item[1],
                    })),
        }),
    }),
});
