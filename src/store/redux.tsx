import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

/* SLICES */
import { exampleSlice } from "./slices";

/* QUERIES */
import { coingeckoApi } from "./queries";

const store = configureStore({
    reducer: {
        [exampleSlice.reducerPath]: exampleSlice.reducer,
        [coingeckoApi.reducerPath]: coingeckoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coingeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const ReduxProvider = ({ children }: React.PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
