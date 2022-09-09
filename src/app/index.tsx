import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GlobalStyle } from 'styles/global-styles'
import { AppRoutes } from 'app/routes'
import { LoadingAnimation } from './components/LoadingAnimation'
import { useDispatch, useSelector } from 'react-redux'
import { loadingSelector } from './slices/auth/selectors'
import { authActions, useAuthSlice } from './slices/auth'
import ErrorBoundary from './ErrorBoundary'
import useFetchCurrentUser from 'hooks/useFetchCurrentUser'

export function App() {
  useAuthSlice()
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const authLoading = useSelector(loadingSelector)
  const { loading, user, isAuthenticated } = useFetchCurrentUser()

  if (!loading && isAuthenticated) {
    dispatch(authActions.setAuth({ isAuthenticated: true, user }))
  } else {
    dispatch(authActions.setAuth({ isAuthenticated: false }))
  }

  useEffect(() => {})

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Linkup - %s"
        defaultTitle="Linkup"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Social app" />
      </Helmet>
      <React.Fragment>
        <ErrorBoundary>
          <AppRoutes isAuth={isAuthenticated} />
        </ErrorBoundary>
      </React.Fragment>
      {authLoading && <LoadingAnimation />}
      <GlobalStyle />
    </BrowserRouter>
  )
}
