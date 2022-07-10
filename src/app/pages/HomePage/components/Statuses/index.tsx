import { lazyLoad } from 'utils/loadable'

export const Statuses = lazyLoad(
  () => import('./Statuses'),
  module => module.Statuses,
)
