import { useRoutes } from 'react-router-dom'
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable'
import { AuthPageLayout } from 'app/layouts/AuthPageLayout'
import { PageLayout } from 'app/layouts/PageLayout'
import { AuthRoutes } from './AuthRoutes'
import { UserRoutes } from './UserRoutes'
import { GeneralRoutes } from './GeneralRoutes'

export const AppRoutes = ({ isAuth }) => {
  // const isAuth: boolean = useSelector(isAuthenticated)
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
