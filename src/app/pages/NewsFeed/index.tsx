import { lazyLoad } from 'utils/loadable';

export const NewsFeed = lazyLoad(
  () => import('./NewsFeed'),
  module => module.NewsFeed,
);
