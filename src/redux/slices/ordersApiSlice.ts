import { GetOrderListRes, orderType } from "../../types/product.types";
import { SELLERS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<GetOrderListRes, { orderId: string; token: string }>({
            query: ({ orderId, token }) => ({
                url: `${SELLERS_URL}/orders/${orderId}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Order'],
        }),
        getOrderDetails: builder.query<{ order: orderType }, { orderId: string; token: string }>({
            query: ({ orderId, token }) => ({
                url: `${SELLERS_URL}/orders/${orderId}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Order'],
        }),
        updateOrder: builder.mutation<{ order: orderType }, { data: any; token: string }>({
            query: ({ data, token }) => ({
                url: `${SELLERS_URL}/orders/${data.prodId}`,
                method: 'PUT',
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['Order'],
        }),
        cancelOrder: builder.mutation<void, { prodId: string; token: string }>({
            query: ({ prodId, token }) => ({
                url: `${SELLERS_URL}/orders/${prodId}`,
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['Order'],
        }),

    }),
});

export const {
    useCancelOrderMutation,
    useGetOrderDetailsQuery,
    useGetOrdersQuery,
    useUpdateOrderMutation
} = usersApiSlice;
