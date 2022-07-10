import { lazyLoad } from 'utils/loadable'

export const Signup = lazyLoad(
  () => import('./Signup'),
  module => module.Signup,
)
