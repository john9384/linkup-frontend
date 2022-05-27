import { lazyLoad } from 'utils/loadable';

export const PeopleList = lazyLoad(
  () => import('./PeopleList'),
  module => module.PeopleList,
);
