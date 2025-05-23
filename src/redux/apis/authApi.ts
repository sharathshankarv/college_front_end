  import { api } from "../api";
  import { setCredentials, logout } from "../slices/authSlice"; // Import slice actions

  export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<
        { token: string; user: { name: string; email: string } },
        { email: string; password: string }
      >({
        query: (credentials) => ({
          url: "login",
          method: "POST",
          body: credentials,
          credentials: "include"
        }),
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setCredentials({ user: data.user }));
          } catch (error) {
            console.error("Login failed:", error);
          }
        },
      }),
      getProfile: builder.query<{ name: string; email: string }, void>({
        query: () => "/profile",
        providesTags: ["User"],
      }),
      me: builder.query<{ name: string; email: string, data: unknown }, void>({
        query: () => "/me",
        providesTags: ["User"],
      }),
      logout: builder.mutation<void, void>({
        query: () => ({
          url: "/logout",
          method: "POST",
        }),
        async onQueryStarted(_, { dispatch }) {
          dispatch(logout());
        },
      }),
    }), 
  });

  export const { useLoginMutation, useGetProfileQuery, useLogoutMutation, useMeQuery } =
    authApi;
