import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
    }),
    getPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    // postData: builder.mutation({
    //   query: ({ ...patch }) => ({
    //     url: "",
    //     method: "POST",
    //     body: patch,
    //   }),
    // }),
  }),
});

console.log(userApi);

// create custom hooks
export const { useGetUsersQuery, useGetUserByIdQuery, useGetPostsQuery } =
  userApi;
