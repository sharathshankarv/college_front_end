import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"; // Adjust the path as needed

// Centralized baseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: "include",
  });

// Base API slice
export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User"], // Define cache tags for invalidation
  endpoints: () => ({}), // Extend in feature slices
});

export default api;