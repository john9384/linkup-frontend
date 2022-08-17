import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable'
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
import { useAuthSlice } from 'app/slices/auth'
import { useProfileSlice } from 'app/slices/profileSlice'
import { isAuthenticated } from 'app/slices/auth/selectors'
import { useSelector } from 'react-redux'

export const AppRoutes = () => {
  useAuthSlice()
  useProfileSlice()
  const isAuth: boolean = useSelector(isAuthenticated)
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={<AuthPageLayout isAuthenticated={isAuth} />}
      >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="confirm-reset" element={<VerifyResetToken />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="/" element={<PageLayout isAuthenticated={isAuth} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="people" element={<People />} />
        <Route path="photos" element={<UserPhoto />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
