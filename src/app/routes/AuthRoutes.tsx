import { Route } from 'react-router-dom'
import { Login } from 'app/pages/auth/components/Login/Login'
import { Signup } from 'app/pages/auth/components/Signup'
import { AuthPageLayout } from 'app/layouts/AuthPageLayout'
import { ForgotPassword } from 'app/pages/auth/components/ForgotPassword'
import { ResetPassword } from 'app/pages/auth/components/ResetPassword'
import { VerifyEmail } from 'app/pages/auth/components/VerifyEmail/VerifyEmail'
import { VerifyResetToken } from 'app/pages/auth/components/VerifyResetToken'

interface Props {
  isAuthenticated: boolean
}

export const AuthRoutes = ({ isAuthenticated }: Props) => {
  return (
    <Route
      path="/auth/*"
      element={<AuthPageLayout isAuthenticated={isAuthenticated} />}
    >
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="confirm-reset" element={<VerifyResetToken />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Route>
  )
}
