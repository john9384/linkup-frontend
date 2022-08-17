import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import { GlobalStyle } from 'styles/global-styles'
import { AppRoutes } from 'app/routes'
import { LoadingAnimation } from './components/LoadingAnimation'
import { useDispatch, useSelector } from 'react-redux'
import { loadingSelector } from './slices/auth/selectors'
import { authActions } from './slices/auth'
import ErrorBoundary from './ErrorBoundary'
// import useFetchCurrentUserProfile from "../hooks/useFetchCurrentUserProfile";

export function App() {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const loading = useSelector(loadingSelector)
  // const { user } = useFetchCurrentUserProfile()

  const setAuthentication = async () => {
    const token = localStorage.getItem('ltk')
    const payload = await axios.get('http://localhost:4000/api/v1/auth/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (payload.data.success) {
      dispatch(authActions.setAuthentication({ isAuthenticated: true, token }))
    } else {
      dispatch(authActions.setAuthentication({ isAuthenticated: false }))
    }
  }

  React.useEffect(() => {
    setAuthentication()
  })

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
          <AppRoutes />
        </ErrorBoundary>
      </React.Fragment>
      {loading && <LoadingAnimation />}
      <GlobalStyle />
    </BrowserRouter>
  )
}
