import { SELLERS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";
import { loginReq, loginRes } from "../../types/slice.types";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<loginRes, loginReq>({
      query: (data) => ({
        url: `${SELLERS_URL}/auth/login`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${SELLERS_URL}/auth/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation
} = usersApiSlice;
