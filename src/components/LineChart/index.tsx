import Chart from "@qognicafinance/react-lightweight-charts";
import { TChartProps, chartOptions, seriesOptions } from "./utils";

const LineChart = (props: TChartProps) => {
    const { data } = props;

    const fromTime = +new Date(data[1].time) / 1000;
    const toTime = +new Date(data[data.length - 2].time) / 1000;

    if (data) {
        return (
            <Chart
                options={chartOptions}
                areaSeries={[
                    {
                        options: seriesOptions,
                        data: data,
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