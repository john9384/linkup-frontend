import { useRoutes } from 'react-router-dom'
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable'
import { AuthPageLayout } from 'app/layouts/AuthPageLayout'
import { PageLayout } from 'app/layouts/PageLayout'
import { useAuthSlice } from 'app/slices/auth'
import { useProfileSlice } from 'app/slices/profileSlice'
import { isAuthenticated } from 'app/slices/auth/selectors'
import { useSelector } from 'react-redux'
import { AuthRoutes } from './AuthRoutes'
import { UserRoutes } from './UserRoutes'
import { GeneralRoutes } from './GeneralRoutes'

export const AppRoutes = () => {
  useAuthSlice()
  useProfileSlice()
  const isAuth: boolean = useSelector(isAuthenticated)
  const routes = useRoutes([
    {
      path: '/auth',
      element: <AuthPageLayout isAuthenticated={isAuth} />,
      children: AuthRoutes,
    },
    {
      path: '/',
      element: <PageLayout isAuthenticated={isAuth} />,
      children: [...GeneralRoutes, ...UserRoutes],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return <>{routes}</>
}
