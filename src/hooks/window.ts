import { useState, useEffect } from "react";

function getWindowDimensions() {
    let width = 1920;
    let height = 1080;
    if (typeof window !== "undefined") {
        const { innerWidth, innerHeight } = window;
        width = innerWidth;
        height = innerHeight;
    }
    return {
        width,
        height,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
