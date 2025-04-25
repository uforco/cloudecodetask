import { productsApi } from "@/redux/apis/productsApi";

export const products = productsApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (undefined) => '/all/product/get'
        })
    })
})


export const { useGetAllProductsQuery } = products