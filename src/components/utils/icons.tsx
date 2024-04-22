import * as React from "react";

export const SearchIcon = () => {
    return (
        <div className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
            >
                <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
};

export const DownIcon = () => {
    return (
        <div className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 380 380"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
            >
                <path
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393	
                       c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,
                       2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
            </svg>
        </div>
    );
};

export const TrendUpIcon = () => {
    return (
        <div className="flex justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 250 250"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path d="M244.00244,56.00513V120a12,12,0,0,1-24,0V84.9707l-75.51465,75.51465a11.99973,11.99973,0,0,1-16.9707,0L96.00244,128.9707,32.48779,192.48535a12.0001,12.0001,0,0,1-16.9707-16.9707l72-72a11.99973,11.99973,0,0,1,16.9707,0l31.51465,31.51465L203.03174,68h-35.0293a12,12,0,0,1,0-24h63.99512c.39746-.00024.79541.02075,1.1914.06006.167.01636.32911.04785.49366.071.22314.0315.44629.05786.66748.10181.19238.03809.37793.09131.56689.13843.19092.04761.3833.09009.57276.14721.18505.05616.36377.126.54492.19068.18847.06714.37793.12939.56347.2063.16846.06982.33008.1521.49415.22949.19091.08936.3833.17432.57031.27441.15527.0835.30273.17847.4541.26856.18506.10986.37207.21484.55225.33545.16455.11035.31884.2334.478.35156.15479.11523.31348.22314.46387.34692.28467.23365.55664.4812.81787.73951.019.01879.04.03418.05908.05322s.03467.04.05371.05908c.2583.262.50635.53418.73975.81885.12012.146.22461.2998.33691.45019.12159.16309.24805.32251.36133.49195.11865.177.22168.36084.33008.54272.0918.1543.189.30518.27393.46387.09863.18408.18213.37329.2705.56128.07862.16723.16211.33179.2334.50317.07569.18311.13721.37036.20362.55664.06591.18311.13623.36377.19287.551.05713.18823.09912.37964.14648.56982.04736.18946.10059.37622.13916.56909.04346.22071.07031.44361.10156.666.02344.16553.05518.32788.07129.49536Q244.00171,55.40808,244.00244,56.00513Z" />
            </svg>
        </div>
    );
};

export const TrendDownIcon = () => {
    return (
        <div className="flex justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                fill="currentColor"
                className="w-6 h-6"
            >
                <g data-name="Layer 2">
                    <g data-name="trending-down">
                        <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />

                        <path d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z" />
                    </g>
                </g>
            </svg>
        </div>
    );
};
