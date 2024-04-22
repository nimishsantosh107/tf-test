import React, { useState } from "react";
import InputAutocomplete from "@/components/InputAutocomplete";
import LineChart from "@/components/LineChart";
import DashboardStats from "@/components/DashboardStats";
import DashboardTable from "@/components/DashboardTable";

import dummydata from "../../dummydata.json";

const Dashboard = () => {
    const [tokenInput, setTokenInput] = useState(dummydata["1_suggestedTokens"][0]);
    const [vsCurrencyInput, setVsCurrencyInput] = useState(dummydata["1_suggestedTokens"][0]);

    return (
        <div className="card bg-base-300 shadow-2xl p-10 mx-10">
            <div className="w-full flex flex-col justify-center">
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
                        icon="down"
                    />
                </div>
                <div className=" w-full flex flex-col lg:flex-row gap-4 mt-4">
                    <div className="h-full">
                        <DashboardStats
                            tokenName="Ethereum"
                            tokenSymbol="ETH"
                            tokenLogo="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800"
                            tokenVsCurrency="USD"
                            tokenPrice={52423.43}
                            token24HrChange={1.343}
                        />
                    </div>

                    <div className="w-full lg:max-w-96 h-72 border border-slate-700 rounded-lg">
                        <LineChart data={dummydata["2_chartData"]} />
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
    );
};

export default Dashboard;
