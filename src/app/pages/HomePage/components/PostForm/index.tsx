import { lazyLoad } from 'utils/loadable';

export const PostForm = lazyLoad(
  () => import('./PostForm'),
  module => module.PostForm,
);
