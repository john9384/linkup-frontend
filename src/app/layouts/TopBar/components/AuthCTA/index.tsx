import { lazyLoad } from 'utils/loadable'

export const AuthCTA = lazyLoad(
  () => import('./AuthCTA'),
  module => module.AuthCTA,
)
