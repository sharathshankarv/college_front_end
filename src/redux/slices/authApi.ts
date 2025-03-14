import { api } from "../api";
import { setCredentials, logout } from "./authSlice"; // Import slice actions

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: { name: string; email: string } }, { email: string; password: string }>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ token: data.token, user: data.user }));
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
    getProfile: builder.query<{ name: string; email: string }, void>({
      query: () => "/auth/profile",
      providesTags: ["User"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch }) {
        dispatch(logout()); // Clear auth state on logout
      },
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery, useLogoutMutation } = authApi;
