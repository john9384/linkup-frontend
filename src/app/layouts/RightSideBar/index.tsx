import { lazyLoad } from 'utils/loadable';

export const RightSideBar = lazyLoad(
  () => import('./RightSideBar'),
  module => module.RightSideBar,
);
