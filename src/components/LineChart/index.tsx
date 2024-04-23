import Chart from "@qognicafinance/react-lightweight-charts";
import { TChartProps, chartOptions, seriesOptions } from "./utils";

const LineChart = (props: TChartProps) => {
    const { data, token24HrChange } = props;

    console.log(data);

    if (data.length > 0) {
        const fromTime = +new Date(data[1].time) / 1000;
        const toTime = +new Date(data[data.length - 1].time) / 1000;
        return (
            <Chart
                options={chartOptions}
                areaSeries={[
                    {
                        options: token24HrChange > 0 ? seriesOptions.INC : seriesOptions.DEC,
                        data: structuredClone(data),
                    },
                ]}
                autoWidth
                autoHeight
                from={fromTime}
                to={toTime}
            />
        );
    } else {
        return <></>;
    }
};

export default LineChart;
