import { Navigate, Outlet } from 'react-router-dom';

export const NotAuthGuard = () => {
  const isAuthenticated = false;

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
