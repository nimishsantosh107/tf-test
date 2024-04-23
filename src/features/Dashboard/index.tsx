import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import InputAutocomplete from "@/components/InputAutocomplete";
import LineChart from "@/components/LineChart";
import DashboardStats from "@/components/DashboardStats";
import DashboardTable from "@/components/DashboardTable";
import useWindowDimensions from "@/hooks/window";
import {
    useGetAllVsCurrenciesQuery,
    useLazyGetAllMarketsQuery,
    useLazyGetMarketByIdQuery,
    useLazyGetMarketChatDataByIdQuery,
} from "@/hooks/queries";
import { SpinnerContext } from "@/contexts";
import { getLSTokenData, appendLSTokenData } from "@/services";
import { addDelimiter, sanitizeDelimiter } from "@/utils";
import defaultConfig from "@/config";

const Dashboard = () => {
    const { width } = useWindowDimensions();
    const { setSpinnerVisible } = useContext(SpinnerContext);

    const [tokenInput, setTokenInput] = useState(defaultConfig.DEFAULT_TOKEN);
    const [vsCurrencyInput, setVsCurrencyInput] = useState(defaultConfig.DEFAULT_VS_CURRENCY);
    const [activeVsCurrency, setActiveVsCurrency] = useState(defaultConfig.DEFAULT_VS_CURRENCY);
    const [tokenList, setTokenList] = useState<string[]>([]);

    // QUERIES
    const {
        data: currencyData,
        isSuccess: isCurrencyDataSuccess,
        isLoading: isCurrencyDataLoading,
        isError: isCurrencyDataError,
    } = useGetAllVsCurrenciesQuery();

    const [
        triggerAll,
        {
            data: allMarketData,
            isSuccess: isAllMarketDataSuccess,
            isLoading: isAllMarketDataLoading,
            isError: isAllMarketDataError,
        },
    ] = useLazyGetAllMarketsQuery();

    const [
        triggerOne,
        {
            data: oneMarketData,
            isSuccess: isOneMarketDataSuccess,
            isLoading: isOneMarketDataLoading,
            isFetching: isOneMarketDataFetching,
            isError: isOneMarketDataError,
        },
    ] = useLazyGetMarketByIdQuery();

    const [
        triggerChart,
        {
            data: marketChartData,
            isSuccess: isMarketChartDataSuccess,
            isLoading: isMarketChartDataLoading,
            isFetching: isMarketChartDataFetching,
            isError: isMarketChartDataError,
        },
    ] = useLazyGetMarketChatDataByIdQuery();

    // USE EFFECTS
    useEffect(() => {
        triggerAll({ vsCurrency: defaultConfig.DEFAULT_VS_CURRENCY }, true);
        triggerOne(
            { id: defaultConfig.DEFAULT_TOKEN, vsCurrency: defaultConfig.DEFAULT_VS_CURRENCY },
            true
        );
        triggerChart(
            { id: defaultConfig.DEFAULT_TOKEN, vsCurrency: defaultConfig.DEFAULT_VS_CURRENCY, days: 10 },
            true
        );
    }, []);

    useEffect(() => {
        if (allMarketData) {
            const tokenIds = allMarketData.map((item) => item.id.toUpperCase());
            const cacheTokenIds = getLSTokenData();
            const filteredTokenIds = _.difference(tokenIds, cacheTokenIds);
            const _cacheTokenIds = cacheTokenIds.map((item) => addDelimiter(item));
            setTokenList(_cacheTokenIds.concat(filteredTokenIds));
        }
    }, [allMarketData, oneMarketData]);

    useEffect(() => {
        if (isOneMarketDataFetching || isMarketChartDataFetching) {
            setSpinnerVisible(true);
        }
    }, [isOneMarketDataFetching, isMarketChartDataFetching]);

    useEffect(() => {
        if (oneMarketData && marketChartData) {
            setActiveVsCurrency(vsCurrencyInput);
            setSpinnerVisible(false);
        }
    }, [oneMarketData, marketChartData]);

    // ACTIONS
    const handleSearchClick = async () => {
        const sanitizedTokenInput = sanitizeDelimiter(tokenInput);
        triggerOne({ id: sanitizedTokenInput, vsCurrency: vsCurrencyInput }, true);
        triggerChart({ id: sanitizedTokenInput, vsCurrency: vsCurrencyInput, days: 10 }, true);
        if (!getLSTokenData().includes(sanitizedTokenInput.toUpperCase())) appendLSTokenData(tokenInput);
    };

    return isCurrencyDataSuccess &&
        isAllMarketDataSuccess &&
        isOneMarketDataSuccess &&
        isMarketChartDataSuccess ? (
        <>
            <div className="w-full lg:w-fit card bg-base-300 shadow-2xl p-6 lg:p-10 mx-2">
                <div className="w-full lg:min-w-[720px] flex flex-col justify-center">
                    <div className="w-full flex gap-2 lg:gap-4 justify-center">
                        <InputAutocomplete
                            inputPlaceholder="Ticker Symbol"
                            inputValue={tokenInput}
                            inputSetvalue={setTokenInput}
                            dropdownValues={tokenList}
                            wClassname="w-full"
                            hClassname="max-h-72"
                            divClassOverride="w-full"
                            icon={`${width > 1024 ? "search" : "none"}`}
                        />
                        <InputAutocomplete
                            inputPlaceholder=""
                            inputValue={vsCurrencyInput}
                            inputSetvalue={setVsCurrencyInput}
                            dropdownValues={currencyData || []}
                            wClassname="w-16 lg:w-24"
                            hClassname="max-h-72"
                            icon={`${width > 1024 ? "down" : "none"}`}
                        />
                        <button onClick={() => handleSearchClick()} className="btn btn-primary">
                            Search
                        </button>
                    </div>
                    <div className=" w-full flex flex-col lg:flex-row lg:justify-between gap-4 mt-4">
                        <div className="border w-full lg:w-1/2 border-slate-700 rounded-lg">
                            <DashboardStats
                                tokenName={oneMarketData?.name || ""}
                                tokenSymbol={oneMarketData?.symbol.toUpperCase() || ""}
                                tokenLogo={oneMarketData?.image || ""}
                                tokenVsCurrency={activeVsCurrency}
                                tokenPrice={oneMarketData?.current_price || 0}
                                token24HrChange={oneMarketData?.price_change_percentage_24h || 0}
                            />
                        </div>

                        <div className="w-full lg:w-1/2 h-72 bg-base-200 border border-slate-700 rounded-lg">
                            <LineChart
                                token24HrChange={oneMarketData?.price_change_percentage_24h || 0}
                                data={marketChartData || []}
                            />
                        </div>
                    </div>
                    <div className="w-full border border-slate-700 rounded-lg mt-4">
                        <DashboardTable
                            tokenVsCurrency={activeVsCurrency}
                            data={{
                                MARKET_CAP: oneMarketData?.market_cap.toLocaleString("en-US") || "",
                                TOTAL_VOLUME: oneMarketData?.total_volume.toLocaleString("en-US") || "",
                                TOTAL_SUPPLY: oneMarketData?.total_supply.toFixed(2) || "",
                                MARKET_CAP_RANK: oneMarketData?.market_cap_rank || 0,
                                HIGH_24: oneMarketData?.high_24h || 0,
                                LOW_24: oneMarketData?.low_24h || 0,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
};

export default Dashboard;
