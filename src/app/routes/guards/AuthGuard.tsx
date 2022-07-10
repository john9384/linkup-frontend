import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuthenticated } from 'app/pages/auth/slice/selectors'

export const AuthGuard = () => {
  const isAuth = useSelector(isAuthenticated)

  return isAuth ? <Outlet /> : <Navigate to="/auth/login" />
}
