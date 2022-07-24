import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable'
import { AuthGuard } from 'app/routes/guards/AuthGuard'
import { NotAuthGuard } from './guards/NotAuthGuard'
import { Login } from 'app/pages/auth/components/Login/Login'
import { Signup } from 'app/pages/auth/components/Signup'
import { AuthPageLayout } from 'app/layouts/AuthPageLayout'
import { HomePage } from 'app/pages/HomePage/Homepage'
import { PageLayout } from 'app/layouts/PageLayout'
import { People } from 'app/pages/People'
import { ForgotPassword } from 'app/pages/auth/components/ForgotPassword'
import { ResetPassword } from 'app/pages/auth/components/ResetPassword'
import { VerifyEmail } from 'app/pages/auth/components/VerifyEmail/VerifyEmail'
import { VerifyResetToken } from 'app/pages/auth/components/VerifyResetToken'
import { UserPhoto } from 'app/pages/UserPhotos/UserPhotos'
import { UserProfile } from 'app/pages/UserProfile/loadable'
import { UserSettings } from 'app/pages/UserSettings'

interface Props {}

export const AppRoutes = () => {
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

        <Route
          path="verify-email"
          element={
            <AuthPageLayout>
              <VerifyEmail />
            </AuthPageLayout>
          }
        />

        <Route
          path="forgot-password"
          element={
            <AuthPageLayout>
              <ForgotPassword />
            </AuthPageLayout>
          }
        />

        <Route
          path="confirm-reset"
          element={
            <AuthPageLayout>
              <VerifyResetToken />
            </AuthPageLayout>
          }
        />

        <Route
          path="reset-password"
          element={
            <AuthPageLayout>
              <ResetPassword />
            </AuthPageLayout>
          }
        />
      </Route>

      {/* Authenticated Routes starts from here */}
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

        <Route
          path="/photos"
          element={
            <PageLayout>
              <UserPhoto />
            </PageLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <PageLayout>
              <UserProfile />
            </PageLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <PageLayout>
              <UserSettings />
            </PageLayout>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
