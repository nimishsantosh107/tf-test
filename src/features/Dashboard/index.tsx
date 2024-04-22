import React, { useState, useEffect } from "react";
import InputAutocomplete from "@/components/InputAutocomplete";
import LineChart from "@/components/LineChart";
import DashboardStats from "@/components/DashboardStats";
import DashboardTable from "@/components/DashboardTable";
import useWindowDimensions from "@/hooks/window";

import dummydata from "../../dummydata.json";

const Dashboard = () => {
    const { width } = useWindowDimensions();

    const [isClient, setIsClient] = useState(false);
    const [tokenInput, setTokenInput] = useState(dummydata["1_suggestedTokens"][0]);
    const [vsCurrencyInput, setVsCurrencyInput] = useState(dummydata["1_suggestedTokens"][0]);

    useEffect(() => setIsClient(true), []);

    return isClient ? (
        <>
            <div className="card bg-base-300 shadow-2xl p-6 lg:p-10 mx-10">
                <div className="w-fit lg:min-w-[720px] flex flex-col justify-center">
                    <div className="flex gap-4 justify-center w-full">
                        <InputAutocomplete
                            inputPlaceholder="Ticker Symbol"
                            inputValue={tokenInput}
                            inputSetvalue={setTokenInput}
                            dropdownValues={dummydata["1_suggestedTokens"] || []}
                            wClassname="w-full max-w-96 lg:w-96"
                            hClassname="max-h-72"
                            icon="search"
                        />
                        <InputAutocomplete
                            inputPlaceholder=""
                            inputValue={vsCurrencyInput}
                            inputSetvalue={setVsCurrencyInput}
                            dropdownValues={dummydata["1_suggestedTokens"] || []}
                            wClassname="w-16 lg:w-24"
                            hClassname="max-h-72"
                            icon={`${width > 1024 ? "down" : "none"}`}
                        />
                    </div>
                    <div className=" w-full flex flex-col lg:flex-row lg:justify-between gap-4 mt-4">
                        <div className="border border-slate-700 rounded-lg">
                            <DashboardStats
                                tokenName="Ethereum"
                                tokenSymbol="ETH"
                                tokenLogo="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800"
                                tokenVsCurrency="USD"
                                tokenPrice={52423.43}
                                token24HrChange={-1.343}
                            />
                        </div>

                        <div className="w-full lg:max-w-96 h-72 bg-base-200 border border-slate-700 rounded-lg">
                            <LineChart token24HrChange={-1.343} data={dummydata["2_chartData"]} />
                        </div>
                    </div>
                    <div className="border border-slate-700 rounded-lg mt-6">
                        <DashboardTable
                            tokenVsCurrency="USD"
                            data={{
                                MARKET_CAP: 1233121231212,
                                TOTAL_VOLUME: 122312,
                                TOTAL_SUPPLY: 1233121231212,
                                MAX_SUPPLY: 1233121231212,
                                HIGH_24: 1233121231212,
                                LOW_24: 1233121231212,
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
