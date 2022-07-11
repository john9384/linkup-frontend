import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuthenticated } from '../../slices/auth/selectors'
import { useAuthSlice } from 'app/slices/auth'

export const NotAuthGuard = () => {
  useAuthSlice()
  const isAuth = useSelector(isAuthenticated)
  return !isAuth ? <Outlet /> : <Navigate to="/" />
}
