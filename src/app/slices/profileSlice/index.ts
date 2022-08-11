import { createSlice } from 'utils/@reduxjs/toolkit'
import { ProfileState } from './types'
import { PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from '../../../utils/redux-injectors'
import profileSaga from './saga'

export const initialState: ProfileState = {
  loading: false,
  user: null,
  error: null,
}

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getUser: state => {
      state.loading = true
    },

    getCurrentUser: state => {
      state.loading = true
    },

    setCurrentUser(state, action: PayloadAction<any>) {
      state.user = action.payload
      state.error = null
      state.loading = false
    },

    setError(state, action: PayloadAction<any>) {
      state.user = {}
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { actions: profileActions } = slice

export const useProfileSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: 'profile', saga: profileSaga })
  return { actions: slice.actions }
}
