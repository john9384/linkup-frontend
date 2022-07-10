import { lazyLoad } from 'utils/loadable'

export const LeftSideBar = lazyLoad(
  () => import('./LeftSideBar'),
  module => module.LeftSideBar,
)
