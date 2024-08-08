import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://auth-v1-shamim.onrender.com/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
