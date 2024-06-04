import { apiSlice } from '@app/store/api/api.slice.ts';

export const requestApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserRequests: builder.query({
      query: () => ({
        url: '/requests',
        method: 'GET',
        keepUnusedDataFor: 60
      })
    }),
    createRequest: builder.mutation({
      query: data => ({
        url: '/requests',
        method: 'POST',
        body: { ...data }
      })
    }),
    updateRequestMaster: builder.mutation({
      query: ({ requestId, masterId }: { requestId: string; masterId: string }) => ({
        url: `/requests/set-master/${requestId}`,
        method: 'POST',
        body: { masterId }
      })
    }),
    updateRequestStatus: builder.mutation({
      query: ({
        requestId,
        status
      }: {
        requestId: string;
        status: 'pending' | 'in-progress' | 'completed';
      }) => ({
        url: `/requests/set-master/${requestId}`,
        method: 'POST',
        body: { status }
      })
    })
  })
});

export const {
  useGetUserRequestsQuery,
  useCreateRequestMutation,
  useUpdateRequestMasterMutation,
  useUpdateRequestStatusMutation
} = requestApiSlice;
