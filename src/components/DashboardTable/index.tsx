import React from "react";
import useWindowDimensions from "@/hooks/window";

type TDashboardTableProps = {
    tokenVsCurrency: string;
    data: {
        MARKET_CAP: number;
        TOTAL_VOLUME: number;
        TOTAL_SUPPLY: number;
        MARKET_CAP_RANK: number;
        HIGH_24: number;
        LOW_24: number;
    };
};

const DashboardTable = ({ tokenVsCurrency, data }: TDashboardTableProps) => {
    const { width } = useWindowDimensions();

    type ColumnKey =
        | "MARKET_CAP"
        | "TOTAL_VOLUME"
        | "TOTAL_SUPPLY"
        | "MARKET_CAP_RANK"
        | "HIGH_24"
        | "LOW_24";
    const columns: { key: ColumnKey; name: string; includeVsCurrency?: boolean }[] = [
        { key: "MARKET_CAP", name: "Market Cap", includeVsCurrency: true },
        { key: "TOTAL_VOLUME", name: "Total Volume", includeVsCurrency: true },
        { key: "TOTAL_SUPPLY", name: "Total Supply" },
        { key: "MARKET_CAP_RANK", name: "Market Cap Rank" },
        { key: "HIGH_24", name: "24h High", includeVsCurrency: true },
        { key: "LOW_24", name: "24h Low", includeVsCurrency: true },
    ];

    const createCell = (key: string, value: string, key2?: string, value2?: string) => (
        <tr key={key}>
            <th>{key}</th>
            <td>{value}</td>
            {key2 && <th>{key2}</th>}
            {value2 && <td>{value2}</td>}
        </tr>
    );

    const constructTable = () => {
        let tableJsx = [];
        let i = 0;
        while (i < columns.length) {
            if (width > 1024) {
                tableJsx.push(
                    createCell(
                        columns[i].name,
                        `${data[columns[i].key]} ${columns[i].includeVsCurrency ? tokenVsCurrency : ""}`,
                        columns[i + 1].name,
                        `${data[columns[i + 1].key]} ${
                            columns[i + 1].includeVsCurrency ? tokenVsCurrency : ""
                        }`
                    )
                );
                i += 1;
            } else {
                tableJsx.push(
                    createCell(
                        columns[i].name,
                        `${data[columns[i].key]} ${columns[i].includeVsCurrency ? tokenVsCurrency : ""}`
                    )
                );
            }
            i += 1;
        }
        return tableJsx;
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table bg-base-200 border-base-300">
                    <tbody>{constructTable()}</tbody>
                </table>
            </div>
        </>
    );
};

export default DashboardTable;
