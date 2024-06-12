import { apiSlice } from '@app/store/api/api.slice.ts';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: 'GET',
        keepUnusedDataFor: 120
      })
    }),
    getMasters: builder.query({
      query: () => ({
        url: `/users/masters`,
        method: 'GET',
        keepUnusedDataFor: 120
      })
    })
  })
});

export const { useGetUserQuery, useGetMastersQuery } = userApiSlice;
