// Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from 'react-redux';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import queryString from 'querystring';

const API_KEY = "279842d9";

// Define a service using a base URL and expected endpoints
export const omdbApi = createApi({
  reducerPath: 'omdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://omdbapi.com/' }),
  endpoints: (builder) => ({
    getOMDBTitle: builder.query({
      query: (searchParams) => {
        const baseEndpoint = `?`;
        const query = queryString.encode({
            ...searchParams,
            api_key: API_KEY
        });
        return baseEndpoint + query;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGiphySearchResultsQuery } = omdbApi;