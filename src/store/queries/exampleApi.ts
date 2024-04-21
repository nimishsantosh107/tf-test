import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ExampleApiTodo, ExampleApiTodos } from "./types";

const DUMMY_JSON_URL = "https://dummyjson.com";

export const exampleApi = createApi({
    reducerPath: "exampleApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${DUMMY_JSON_URL}` }),
    endpoints: (builder) => ({
        getOne: builder.query<ExampleApiTodo, { id: number }>({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: "GET",
                headers: { Example: `Example` },
            }),
        }),
        getAll: builder.query<ExampleApiTodos, {}>({
            query: () => ({
                url: "/todos",
                method: "GET",
                headers: { Example: `Example` },
            }),
        }),
    }),
});
