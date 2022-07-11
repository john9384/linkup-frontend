import { RootState } from '../../../types/RootState'
import { initialState } from './index'
import { createSelector } from '@reduxjs/toolkit'

export const selector = (state: RootState) => state.profile || initialState

export const loadingSelector = createSelector(selector, state => state.loading)
export const userProfileSelector = createSelector(selector, state => state.user)
