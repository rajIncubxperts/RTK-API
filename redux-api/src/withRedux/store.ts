import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { postApi } from "../services/postApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [postApi.reducerPath]: postApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (mid) => mid().concat(postApi.middleware),
});
