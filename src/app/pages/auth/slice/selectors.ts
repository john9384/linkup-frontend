import { RootState } from '../../../../types/RootState';

export const authSelector = (state: RootState) => state.auth?.isAuthenticated;
export const userSelector = (state: RootState) => state.auth?.user;
