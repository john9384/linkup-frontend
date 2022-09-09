import { useInjectReducer, useInjectSaga } from '../../../utils/redux-injectors'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { PostState } from './types'
import postSaga from './saga'

export const initialState: PostState = {
  loading: false,
  post: {},
  postList: [],
  error: null,
}

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setPost(state, action: PayloadAction<any>) {
      state.post = action.payload
      state.loading = false
    },
    setPostList(state, action: PayloadAction<any>) {
      state.postList = action.payload
      state.loading = false
    },
    unShiftPostList(state, action: PayloadAction<any>) {
      state.postList = [...action.payload, ...state.postList]
      state.loading = false
    },
    pushPostList(state, action: PayloadAction<any>) {
      state.postList = [...state.postList, ...action.payload]
      state.loading = false
    },
    getPost(state, action: PayloadAction<any>) {},
    getPostList(state) {
      state.loading = true
    },
    likePost(state, action: PayloadAction<any>) {
      state.loading = true
    },
    unlikePost(state, action: PayloadAction<any>) {
      state.loading = true
    },
    createPost(state, action: PayloadAction<any>) {
      state.loading = true
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { actions: postActions } = slice

export const usePostSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: 'post', saga: postSaga })
  return { actions: slice.actions }
}
