import { lazyLoad } from 'utils/loadable';

export const UserAccount = lazyLoad(
  () => import('./UserAccount'),
  module => module.UserAccount,
);
