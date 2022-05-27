import { lazyLoad } from 'utils/loadable';

export const FilterDiv = lazyLoad(
  () => import('./FilterDiv'),
  module => module.FilterDiv,
);
