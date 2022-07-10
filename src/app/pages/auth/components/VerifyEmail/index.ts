import { lazyLoad } from 'utils/loadable'

export const VerifyEmail = lazyLoad(
  () => import('./VerifyEmail'),
  module => module.VerifyEmail,
)
