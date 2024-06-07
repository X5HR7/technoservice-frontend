import { apiSlice } from '@app/store/api/api.slice.ts';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: 'GET',
        keepUnusedDataFor: 120
      })
    })
  })
});

export const { useGetUserQuery } = userApiSlice;
