import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const counterRTKApi = createApi({
  reducerPath: "counterRTKApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    // prepare headers is used to pass api key or other needed headers and then simply return headers
    // prepareHeaders:(headers)=>{
    // headers.set('apikey',"value_of_api_key")
    // return headers }
  }),
  endpoints: (builder) => {
    return {
      fetchParticularProduct: builder.query<Array<ProductType>, number | void>({
        query: (limit) => {
          return `/products/${limit}/`;
        },
      }),
      fetchAllProducts: builder.query<Array<ProductType>, number | void>({
        query: () => {
          return `/products/`;
        },
      })
    };
  },
});

export const { useFetchParticularProductQuery,useFetchAllProductsQuery } = counterRTKApi;
