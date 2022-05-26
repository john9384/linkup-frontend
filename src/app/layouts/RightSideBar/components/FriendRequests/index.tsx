import { lazyLoad } from 'utils/loadable';

export const FriendRequest = lazyLoad(
  () => import('./FriendRequest'),
  module => module.FriendRequest,
);
