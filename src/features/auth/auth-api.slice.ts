import { apiSlice } from '@app/store/api/api.slice.ts';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    refreshTokens: builder.query({
      query: () => ({
        url: '/auth/login/access-token',
        method: 'GET',
        keepUnusedDataFor: 1
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation, useRefreshTokensQuery } = authApiSlice;
