import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import { AuthGuard } from '../guards/AuthGuard';
import { HomePage } from 'app/pages/HomePage/Homepage';
import { PageLayout } from 'app/layouts/PageLayout';
import { People } from 'app/pages/People';
import { useSelector } from 'react-redux';
import { authSelector } from '../../pages/auth/slice/selectors';

interface Props {}

export const MainRoutes = React.memo((props: Props) => {
  const isAuthenticated = useSelector(authSelector);
  return (
    <PageLayout>
      <Switch>
        <AuthGuard exact path="/" isAuthenticated={isAuthenticated}>
          <HomePage />
        </AuthGuard>
        <AuthGuard exact path="/people" isAuthenticated={isAuthenticated}>
          <People />
        </AuthGuard>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </PageLayout>
  );
});
