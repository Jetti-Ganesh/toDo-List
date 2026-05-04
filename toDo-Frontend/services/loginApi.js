import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => (
        {
            getAllTodos: builder.query({
                query: () => '/'
            }),
            login: builder.mutation(
                {
                    query: (user) => ({
                        url: `/login`,
                        method: "POST",
                        body: user,
                    })
                }
            )
        }),
});
export const { useGetAllTodosQuery, useLoginMutation} = loginApi;