import axios from "axios";

const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY || undefined;

if (!COINGECKO_API_KEY) throw new Error("COINGECKO_API_KEY unavailable");

export const coingeckoApi = axios.create({
    baseURL: COINGECKO_BASE_URL,
    headers: { "x-cg-demo-api-key": COINGECKO_API_KEY },
});
