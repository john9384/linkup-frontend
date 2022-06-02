import React from 'react';
import { Switch } from 'react-router-dom';
import { NotAuthGuard } from '../guards/NotAuthGuard';
import { Login } from 'app/pages/auth/components/Login/Login';
import { Signup } from 'app/pages/auth/components/Signup';
import { AuthPageLayout } from 'app/layouts/AuthPageLayout';
import { useSelector } from 'react-redux';
import { authSelector } from '../../pages/auth/slice/selectors';

interface Props {}

export const AuthRoutes = React.memo((props: Props) => {
  const isAuthenticated = useSelector(authSelector);

  return (
    <AuthPageLayout>
      <Switch>
        <NotAuthGuard exact path="/login" isAuthenticated={isAuthenticated}>
          <Login />
        </NotAuthGuard>
        <NotAuthGuard exact path="/signup" isAuthenticated={isAuthenticated}>
          <Signup />
        </NotAuthGuard>
      </Switch>
    </AuthPageLayout>
  );
});
