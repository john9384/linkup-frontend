import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};
