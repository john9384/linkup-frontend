import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuthenticated } from '../../pages/auth/slice/selectors'
import { useAuthSlice } from 'app/pages/auth/slice'

export const NotAuthGuard = () => {
  useAuthSlice()
  const isAuth = useSelector(isAuthenticated)
  return !isAuth ? <Outlet /> : <Navigate to="/" />
}
