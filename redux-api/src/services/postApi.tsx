// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Post } from "../models/post.model";

// export const postApi = createApi({
//   reducerPath: "postApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com",
//   }),
//   endpoints: (builder) => ({
//     posts: builder.query<Post[], void>({
//       query: () => "/posts",
//     }),
//     post: builder.query<Post, Number>({
//       query: (id) => `/posts/${id}`,
//     }),
//     createPost: builder.mutation<void, Post>({
//       query: (post) => ({
//         url: "/posts",
//         method: "POST",
//         body: post,
//       }),
//     }),
//     updatePost: builder.mutation<void, Post>({
//       query: ({ id, ...rest }) => ({
//         url: `/posts/${id}`,
//         method: "PUT",
//         body: rest,
//       }),
//     }),
//     deletePost: builder.mutation<void, Post>({
//       query: (id) => ({
//         url: `/posts/${id}`,
//         method: "DELETE",
//       }),
//     }),
//   }),
// });

// export const {
//   usePostsQuery,
//   usePostQuery,
//   useCreatePostMutation,
//   useUpdatePostMutation,
//   useDeletePostMutation,
// } = postApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => "/Posts",
      providesTags: ["Posts"],
    }),
    post: builder.query<Post, Number>({
      query: (id) => `/posts/${id}`,
    }),
    createPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "/Posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<void, Post>({
      query: ({ id, ...rest }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deletePost: builder.mutation<void, Post>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
