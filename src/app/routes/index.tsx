import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage/Loadable';
import { AuthGuard } from './guards/AuthGuard';
import { NotAuthGuard } from './guards/NotAuthGuard';
import { Login } from 'app/pages/auth/components/Login/Login';
import { Signup } from 'app/pages/auth/components/Signup';
import { AuthPageLayout } from 'app/layouts/AuthPageLayout';
import { HomePage } from 'app/pages/HomePage/Homepage';
import { PageLayout } from 'app/layouts/PageLayout';
import { People } from 'app/pages/People';

interface Props {}

export const AppRoutes = memo((props: Props) => {
  return (
    <Routes>
      <Route path="/auth/" element={<NotAuthGuard />}>
        <Route
          path="login"
          element={
            <AuthPageLayout>
              <Login />
            </AuthPageLayout>
          }
        />
        <Route
          path="signup"
          element={
            <AuthPageLayout>
              <Signup />
            </AuthPageLayout>
          }
        />
      </Route>
      <Route path="/" element={<AuthGuard />}>
        <Route
          path="/"
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />
        <Route
          path="/people"
          element={
            <PageLayout>
              <People />
            </PageLayout>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
});
