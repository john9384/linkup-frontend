import { lazyLoad } from 'utils/loadable';

export const ResetPassword = lazyLoad(
  () => import('./ResetPassword'),
  module => module.ResetPassword,
);
