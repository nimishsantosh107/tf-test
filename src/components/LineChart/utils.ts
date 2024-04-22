export type TChartProps = {
    data: { time: string; value: number }[];
    token24HrChange: number;
    className?: string;
};

export const chartOptions = {
    alignLabels: true,
    layout: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        textColor: "rgba(255, 255, 255, 0.7)",
        fontSize: 10,
        fontFamily: "Calibri",
    },
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        },
    },
    crosshair: {
        vertLine: {
            visible: false,
            labelVisible: false,
        },
        horzLine: {
            visible: false,
            labelVisible: false,
        },
        mode: 1,
    },
    timeScale: {
        lockVisibleTimeRangeOnResize: true,
        borderVisible: false,
        visible: true,
        timeVisible: true,
        secondsVisible: false,
        // rightBarStaysOnScroll: true,
        // rightOffset: 12,
        // barSpacing: 3,
        // fixLeftEdge: true,
        // borderColor: "rgba(0, 0, 0, 0.2)",
    },
    priceScale: {
        position: "right",
        autoScale: true,
        borderVisible: false,
    },
    handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
    },
    handleScale: {
        axisPressedMouseMove: false,
        mouseWheel: false,
        pinch: false,
    },
};

export const seriesOptions = {
    INC: {
        topColor: "rgba(45, 212, 191, 1)",
        bottomColor: "rgba(37, 99, 235, 0)",
        lineColor: "rgba(54, 255, 229, 1)",
        lineStyle: 0,
        lineWidth: 3,
    },
    DEC: {
        topColor: "rgba(255, 76, 110, 1)",
        bottomColor: "rgba(37, 99, 235, 0)",
        lineColor: "rgba(251, 112, 133, 1)",
        lineStyle: 0,
        lineWidth: 3,
    },
};
