import { lazyLoad } from 'utils/loadable'

export const PeopleList = lazyLoad(
  () => import('./PhotoList'),
  module => module.PeopleList,
)
