import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthGuard } from '../guards/AuthGuard';
import { HomePage } from 'app/pages/HomePage/Homepage';
import { PageLayout } from 'app/layouts/PageLayout';
import { People } from 'app/pages/People';

interface Props {}

export const MainRoutes = React.memo((props: Props) => {
  const isAuthenticated = true;

  return (
    <Switch>
      <PageLayout>
        <Switch>
          <AuthGuard exact path="/" isAuthenticated={isAuthenticated}>
            <HomePage />
          </AuthGuard>
          <AuthGuard exact path="/people" isAuthenticated={isAuthenticated}>
            <People />
          </AuthGuard>
        </Switch>
      </PageLayout>
    </Switch>
  );
});
