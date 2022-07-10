import { lazyLoad } from 'utils/loadable'

export const VerifyResetToken = lazyLoad(
  () => import('./VerifyResetToken'),
  module => module.VerifyResetToken,
)
