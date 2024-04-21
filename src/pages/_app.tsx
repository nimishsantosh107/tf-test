import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ExampleContextProvider } from "@/contexts";
import ReduxProvider from "@/store/redux";
import BaseTemplate from "@/templates/BaseTemplate";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <ReduxProvider>
                <ExampleContextProvider>
                    <>
                        <BaseTemplate>
                            <Component {...pageProps} />
                        </BaseTemplate>
                    </>
                </ExampleContextProvider>
            </ReduxProvider>
        </div>
    );
}
