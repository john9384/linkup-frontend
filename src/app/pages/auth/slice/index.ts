import { createSlice } from 'utils/@reduxjs/toolkit';
import { AuthState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import authSaga from './saga';

export const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedState(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = { ...state.user, ...action.payload };
      state.loading = false;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = { ...state.error, ...action.payload };
    },
    signupUser(state, action: PayloadAction<any>) {
      state.loading = true;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'auth', saga: authSaga });
  return { actions: slice.actions };
};
