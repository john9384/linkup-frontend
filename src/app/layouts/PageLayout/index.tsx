import { lazyLoad } from 'utils/loadable'
import { LoadingIndicator } from 'app/components/LoadingIndicator'
import { LoadingWrapper } from 'app/layouts/LoadingWrapper'

export const PageLayout = lazyLoad(
  () => import('./PageLayout'),
  module => module.PageLayout,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)
