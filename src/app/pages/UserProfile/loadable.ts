import { lazyLoad } from 'utils/loadable'

export const UserProfile = lazyLoad(
  () => import('.'),
  module => module.UserProfile,
)
