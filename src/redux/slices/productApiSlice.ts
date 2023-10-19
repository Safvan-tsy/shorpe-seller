import { GetProductListRes, ProductType } from "../../types/product.types";
import { SELLERS_URL } from "../../utils/constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        imageUpload: builder.mutation<{ image: string }, { formData: FormData; token: string }>({
            query: ({ formData, token }) => ({
                url: `${SELLERS_URL}/products/image`,
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }),
        deleteProduct: builder.mutation<void, { prodId: string; token: string }>({
            query: ({ prodId, token }) => ({
                url: `${SELLERS_URL}/products/${prodId}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        getProducts: builder.query<GetProductListRes, { page: string; keyword: string }>({
            query: ({ page, keyword }) => ({
                url: `${SELLERS_URL}/products/`,
                params: { page, keyword },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Product'],
        }),
        getProductDetail: builder.query<{ product: ProductType }, string>({
            query: (productId) => ({
                url: `${SELLERS_URL}/products/${productId}`,
            }),
            providesTags: ['Product'],
        }),
        createProduct: builder.mutation<{ product: ProductType }, { data: any; token: string }>({
            query: ({ data, token }) => ({
                url: `${SELLERS_URL}/products/`,
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['Product'],
        }),
        updateProduct: builder.mutation<{ product: ProductType }, { data: any; token: string }>({
            query: ({ data, token }) => ({
                url: `${SELLERS_URL}/products/${data.prodId}`,
                method: 'PUT',
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['Product'],
        }),

    }),
});

export const {
    useImageUploadMutation,
    useCreateProductMutation,
    useDeleteProductMutation,
    useGetProductDetailQuery,
    useGetProductsQuery,
    useUpdateProductMutation
} = usersApiSlice;
