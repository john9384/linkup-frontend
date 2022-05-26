import { lazyLoad } from 'utils/loadable';

export const TopBarRight = lazyLoad(
  () => import('./TopBarRight'),
  module => module.TopBarRight,
);
