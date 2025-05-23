  import { api } from "../api";
  import { setCredentials, logout } from "../slices/authSlice";
  import {API_ROUTES} from "@/constants/apiRoutes";

  export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<
        { token: string; user: { name: string; email: string } },
        { email: string; password: string }
      >({
        query: (credentials) => ({
          url: API_ROUTES.LOGIN,
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
        query: () => API_ROUTES.PROFILE,
        providesTags: ["User"],
      }),
      me: builder.query<{ name: string; email: string, data: unknown }, void>({
        query: () => API_ROUTES.ME,
        providesTags: ["User"],
      }),
      logout: builder.mutation<void, void>({
        query: () => ({
          url: API_ROUTES.LOGOUT,
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
