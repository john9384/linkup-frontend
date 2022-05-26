import { lazyLoad } from 'utils/loadable';

export const NavMenu = lazyLoad(
  () => import('./NavMenu'),
  module => module.NavMenu,
);
