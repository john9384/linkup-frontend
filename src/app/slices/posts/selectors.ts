import { RootState } from '../../../types'
import { initialState } from './index'
import { createSelector } from '@reduxjs/toolkit'

export const selector = (state: RootState) => state.post || initialState

export const loadingSelector = createSelector(selector, state => state.loading)
export const postSelector = createSelector(selector, state => state.post)
export const postListSelector = createSelector(
  selector,
  state => state.postList,
)
export const errorSelector = createSelector(selector, state => state.error)
