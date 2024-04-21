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
