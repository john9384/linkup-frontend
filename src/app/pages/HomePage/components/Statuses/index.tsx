import { lazyLoad } from 'utils/loadable'
import * as React from 'react'
import { LoadingAnimation } from '../../../../components/LoadingAnimation'

export const Statuses = lazyLoad(
  () => import('./Statuses'),
  module => module.Statuses,
  {
    fallback: <LoadingAnimation />,
  },
)
