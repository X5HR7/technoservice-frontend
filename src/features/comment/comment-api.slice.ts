import { apiSlice } from '@app/store/api/api.slice.ts';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    sendMessage: builder.mutation({
      query: ({ requestId, message }: { requestId: string; message: string }) => ({
        url: `/comments/${requestId}`,
        method: 'POST',
        body: { text: message }
      })
    })
  })
});

export const { useSendMessageMutation } = commentApiSlice;
