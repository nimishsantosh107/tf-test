import { coingeckoApi } from "../../store/queries";
export const {
    useGetAllVsCurrenciesQuery,
    useLazyGetAllMarketsQuery,
    useLazyGetMarketByIdQuery,
    useLazyGetMarketChatDataByIdQuery,
} = coingeckoApi;
