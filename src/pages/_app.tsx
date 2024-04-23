import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpinnerContextProvider } from "@/contexts";
import ReduxProvider from "@/store/redux";
import BaseTemplate from "@/templates/BaseTemplate";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <ReduxProvider>
                <SpinnerContextProvider>
                    <>
                        <BaseTemplate>
                            <Component {...pageProps} />
                        </BaseTemplate>
                    </>
                </SpinnerContextProvider>
            </ReduxProvider>
        </div>
    );
}
