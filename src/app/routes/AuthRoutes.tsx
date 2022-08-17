import { Login } from 'app/pages/auth/components/Login/Login'
import { Signup } from 'app/pages/auth/components/Signup'
import { ForgotPassword } from 'app/pages/auth/components/ForgotPassword'
import { ResetPassword } from 'app/pages/auth/components/ResetPassword'
import { VerifyEmail } from 'app/pages/auth/components/VerifyEmail/VerifyEmail'
import { VerifyResetToken } from 'app/pages/auth/components/VerifyResetToken'

export const AuthRoutes = [
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <Signup /> },
  { path: 'verify-email', element: <VerifyEmail /> },
  { path: 'forgot-password', element: <ForgotPassword /> },
  { path: 'confirm-reset', element: <VerifyResetToken /> },
  { path: 'reset-password', element: <ResetPassword /> },
]
