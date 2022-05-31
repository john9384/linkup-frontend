import React from 'react';
import { Switch } from 'react-router-dom';
import { NotAuthGuard } from '../guards/NotAuthGuard';
import { Login } from 'app/pages/auth/Login';
import { Signup } from 'app/pages/auth/Signup';

interface Props {}

export const MainRoutes = React.memo((props: Props) => {
  const isAuthenticated = true;

  return (
    <Switch>
      <NotAuthGuard exact path="/" isAuthenticated={isAuthenticated}>
        <Login />
      </NotAuthGuard>
      <NotAuthGuard exact path="/people" isAuthenticated={isAuthenticated}>
        <Signup />
      </NotAuthGuard>
    </Switch>
  );
});
