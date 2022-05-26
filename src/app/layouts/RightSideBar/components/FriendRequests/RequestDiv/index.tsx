import { lazyLoad } from 'utils/loadable';

export const RequestDiv = lazyLoad(
  () => import('./RequestDiv'),
  module => module.RequestDiv,
);
