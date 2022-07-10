import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { GlobalStyle } from 'styles/global-styles'
import { AppRoutes } from 'app/routes'
import { LoadingAnimation } from './components/LoadingAnimation'
import { useDispatch, useSelector } from 'react-redux'
import { loadingSelector } from './pages/auth/slice/selectors'
import { authActions } from './pages/auth/slice'

export function App() {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const loading = useSelector(loadingSelector)

  const setAuthentication = () => {
    const token = localStorage.getItem('ltk')
    if (token) {
      dispatch(authActions.setAuthentication({ isAuthenticated: true, token }))
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
        <AppRoutes />
      </React.Fragment>
      {loading && <LoadingAnimation />}
      <GlobalStyle />
    </BrowserRouter>
  )
}
