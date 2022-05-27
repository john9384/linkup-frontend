import { lazyLoad } from 'utils/loadable';

export const People = lazyLoad(
  () => import('./People'),
  module => module.People,
);
