import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

/* SLICES */
import { exampleSlice } from "./slices";

/* QUERIES */
import { exampleApi } from "./queries";

const store = configureStore({
    reducer: {
        [exampleSlice.reducerPath]: exampleSlice.reducer,
        [exampleApi.reducerPath]: exampleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exampleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const ReduxProvider = ({ children }: React.PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
