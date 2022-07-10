import { lazyLoad } from 'utils/loadable'

export const People = lazyLoad(
  () => import('./UserPhotos'),
  module => module.UserPhoto,
)
