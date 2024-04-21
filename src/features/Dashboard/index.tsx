import React, { useState } from "react";
import InputAutocomplete from "@/components/InputAutocomplete";
import dummydata from "../../dummydata.json";

const Dashboard = () => {
    const [tokenInput, setTokenInput] = useState("");

    return (
        <div className="card bg-base-300 shadow-2xl p-10">
            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex">
                    <InputAutocomplete
                        inputPlaceholder="Ticker Symbol"
                        inputValue={tokenInput}
                        inputSetvalue={setTokenInput}
                        dropdownValues={dummydata["1_suggestedTokens"] || []}
                        wClassname="w-96"
                        hClassname="max-h-72"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
