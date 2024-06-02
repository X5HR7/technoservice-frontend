import { reducer as authReducer } from '@features/auth/auth.slice.ts';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@app/store/api/api.slice.ts';

const reducers = combineReducers({ auth: authReducer, [apiSlice.reducerPath]: apiSlice.reducer });

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
