import React, { PropsWithChildren, createContext, useState } from "react";

interface ISpinnerContext {
    spinnerVisible: boolean;
    setSpinnerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SpinnerContext = createContext({} as ISpinnerContext);

export const SpinnerContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [spinnerVisible, setSpinnerVisible] = useState(false);

    return (
        <SpinnerContext.Provider value={{ spinnerVisible, setSpinnerVisible }}>
            {children}
        </SpinnerContext.Provider>
    );
};
