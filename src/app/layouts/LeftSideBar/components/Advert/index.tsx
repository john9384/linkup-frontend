import { lazyLoad } from 'utils/loadable';

export const Advert = lazyLoad(
  () => import('./Advert'),
  module => module.Advert,
);
