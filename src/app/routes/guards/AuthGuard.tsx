import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuthenticated } from 'app/slices/auth/selectors'

export const AuthGuard = () => {
  const isAuth = useSelector(isAuthenticated)

  return isAuth ? <Outlet /> : <Navigate to="/auth/login" />
}
