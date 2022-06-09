import { lazyLoad } from 'utils/loadable';

export const ForgotPassword = lazyLoad(
  () => import('./ForgotPassword'),
  module => module.ForgotPassword,
);
