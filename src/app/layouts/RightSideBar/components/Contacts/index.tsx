import { lazyLoad } from 'utils/loadable';

export const Contacts = lazyLoad(
  () => import('./Contacts'),
  module => module.Contacts,
);
