import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"; // Adjust the path as needed

// Centralized baseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: "https://node-crud-2.vercel.app/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Base API slice
export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User"], // Define cache tags for invalidation
  endpoints: () => ({}), // Extend in feature slices
});

export default api;