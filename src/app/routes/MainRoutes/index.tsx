import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthGuard } from '../guards/AuthGuard';
import { HomePage } from 'app/pages/HomePage/Homepage';
import { PageLayout } from 'app/layouts/PageLayout';
import { NewsFeed } from 'app/pages/NewsFeed';

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
          <AuthGuard exact path="/news-feed" isAuthenticated={isAuthenticated}>
            <NewsFeed />
          </AuthGuard>
        </Switch>
      </PageLayout>
    </Switch>
  );
});
