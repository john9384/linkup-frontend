import { lazyLoad } from 'utils/loadable';

export const Feeds = lazyLoad(
  () => import('./Feeds'),
  module => module.Feeds,
);
