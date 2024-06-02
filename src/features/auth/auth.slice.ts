import { IInitialState, ISetCredentialsPayload } from '@features/auth/auth.interface.ts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IInitialState = {
  user: null,
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state: IInitialState, { payload }: PayloadAction<ISetCredentialsPayload>) => {
      const { user, accessToken } = payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: state => {
      state.user = null;
      state.accessToken = null;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export const { actions, reducer } = authSlice;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
