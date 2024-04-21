import React, { PropsWithChildren, createContext } from "react";

interface IExampleContext {
    readonly status: string;
}
export const ExampleContext = createContext({} as IExampleContext);

export const ExampleContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const status = "CONTEXT_TRUE";
    return <ExampleContext.Provider value={{ status }}>{children}</ExampleContext.Provider>;
};
