import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExampleType } from "./types";

const initialState: Partial<ExampleType> = {};

export const exampleSlice = createSlice({
    name: "exampleSlice",
    initialState,
    reducers: {
        setExample: (state, action: PayloadAction<string>) => {
            state.exampleKey = action.payload;
        },
    },
});
