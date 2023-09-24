import { SELLERS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";
import { Seller } from "../../types/seller.types";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ data:{seller:Seller},token: string }, { email:string ,password:string}>({
      query: (data) => ({
        url: `${SELLERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${SELLERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation
} = usersApiSlice;
