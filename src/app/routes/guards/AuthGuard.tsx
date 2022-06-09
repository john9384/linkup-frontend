import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../pages/auth/slice/selectors';

export const AuthGuard = () => {
  const isAuthenticated = useSelector(authSelector);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};
