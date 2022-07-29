import { createSlice } from 'utils/@reduxjs/toolkit'
import { AuthState } from './types'
import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from '../../../utils/redux-injectors'
import authSaga from './saga'

export const initialState: AuthState = {
  isAuthenticated: false,
  authToken: null,
  loading: false,
  user: {},
  error: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedState(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload
    },

    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },

    setAuthentication(state, action: PayloadAction<any>) {
      state.isAuthenticated = action.payload.isAuthenticated
      state.authToken = action.payload.token
      state.user = action.payload.user
      state.loading = false
    },

    setAuth(state, action: PayloadAction<string>) {
      localStorage.setItem('ltk', action.payload)
      state.authToken = action.payload
      state.isAuthenticated = true
    },

    setUser(state, action: PayloadAction<any>) {
      state.user = { ...state.user, ...action.payload }
      state.error = null
      state.loading = false
    },

    setError(state, action: PayloadAction<any>) {
      state.user = {}
      state.error = action.payload
      state.loading = false
    },

    signupUser(state, action: PayloadAction<any>) {
      state.loading = true
    },

    verifyUserEmail(state, action: PayloadAction<any>) {
      state.loading = true
    },

    loginUser(state, action: PayloadAction<any>) {
      state.loading = true
    },

    forgotUserPassword(state, action: PayloadAction<any>) {
      state.loading = true
    },

    verifyPasswordResetToken(state, action: PayloadAction<any>) {
      state.loading = true
    },

    resetUserPassword(state, action: PayloadAction<any>) {
      state.loading = true
    },

    getCurrentUser(state) {
      state.loading = true
    },

    logoutUser(state) {
      state.loading = true
      localStorage.removeItem('ltk')
      state.isAuthenticated = false
      state.authToken = null
      state.user = null
      state.error = null
      state.loading = false
    },
  },
})

export const { actions: authActions } = slice

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: 'auth', saga: authSaga })
  return { actions: slice.actions }
}
