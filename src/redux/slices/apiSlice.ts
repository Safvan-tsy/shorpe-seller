import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";

type BaseQuery = BaseQueryFn<FetchArgs>;
const baseQuery: BaseQuery = fetchBaseQuery({ baseUrl: API_URL });
export type EndpointsBuilder = Parameters<typeof createApi>[0]['endpoints'];

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'Seller'],
  endpoints: () => ({}),
});
