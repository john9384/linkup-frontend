export interface AuthState {
  isAuthenticated: boolean
  authToken?: string | null
  loading?: boolean
  user?: any
  error?: any
}
