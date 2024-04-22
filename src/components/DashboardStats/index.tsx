import * as React from "react";
import { TrendUpIcon, TrendDownIcon } from "../utils/icons";

type TDashboardStatsProps = {
    tokenName: string;
    tokenSymbol: string;
    tokenLogo: string;
    tokenVsCurrency: string;
    tokenPrice: number;
    token24HrChange: number;
};

const DashboardStats = ({
    tokenName,
    tokenSymbol,
    tokenLogo,
    tokenVsCurrency,
    tokenPrice,
    token24HrChange,
}: TDashboardStatsProps) => {
    return (
        <>
            <div className="lg:h-72 w-full stats stats-vertical shadow">
                <div className="stat">
                    <div className="stat-title">
                        <div className="flex gap-2 items-center">
                            <span className="lg:text-3xl">{tokenName}</span>
                            <div>
                                <img alt={tokenName} src={tokenLogo} width="30" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value lg:-m-[3px] lg:text-8xl">{tokenSymbol}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Current Price</div>
                    <div className="stat-value">
                        <div
                            className={`flex gap-2 items-center ${
                                token24HrChange > 0 ? "text-success" : "text-error"
                            }`}
                        >
                            {tokenPrice} {tokenVsCurrency}
                            <>{token24HrChange > 0 ? <TrendUpIcon /> : <TrendDownIcon />}</>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardStats;
