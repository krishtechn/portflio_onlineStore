// Or from '@reduxjs/toolkit/query/react'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (name) => `/`,
            providesTags: ['product'],
        }),
        getUniqueProducts: builder.query({
            query: (category) => `category/${category}`,
            providesTags: ['product'],
        }),
        getUniqueProductDetails:builder.query({
            query: (id) => `/${id}`,
            providesTags: ['product'],
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['product'],
        }),
        updateProducts:builder.mutation({
            query: ({id}) => ({
                url: `/${id}`,
                method: 'PATCH',
              }),
              invalidatesTags: ['product'],
        }),
    }),
})

export const { useGetAllProductsQuery, useDeleteProductsMutation,useUpdateProductsMutation,useGetUniqueProductDetailsQuery,useGetUniqueProductsQuery } = productApi;