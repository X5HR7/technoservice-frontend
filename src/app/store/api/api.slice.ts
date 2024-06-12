import { RootState } from '@app/store/store.ts';
import { ISetCredentialsPayload } from '@features/auth/auth.interface.ts';
import { logout, setCredentials } from '@features/auth/auth.slice.ts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/',
  credentials: 'include',
  prepareHeaders: (headers: Headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  }
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('error');
    const refreshResult = await baseQuery('/auth/login/access-token', api, extraOptions);
    console.log(refreshResult);

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data as ISetCredentialsPayload }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
});
