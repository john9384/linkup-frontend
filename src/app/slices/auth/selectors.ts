import { RootState } from '../../../types/RootState'
import { initialState } from './index'
import { createSelector } from '@reduxjs/toolkit'

export const selector = (state: RootState) => state.auth || initialState

export const isAuthenticated = createSelector(
  selector,
  state => state.isAuthenticated,
)
export const authToken = createSelector(selector, state => state.authToken)
export const loadingSelector = createSelector(selector, state => state.loading)
export const userSelector = createSelector(selector, state => state.user)
export const errorSelector = createSelector(selector, state => state.error)
