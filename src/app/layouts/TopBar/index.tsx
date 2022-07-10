import { lazyLoad } from 'utils/loadable'

export const TopBar = lazyLoad(
  () => import('./TopBar'),
  module => module.TopBar,
)
