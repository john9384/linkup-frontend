import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from 'styles/global-styles';
import { AppRoutes } from 'app/routes';

export function App() {
  const { i18n } = useTranslation();
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
      <GlobalStyle />
    </BrowserRouter>
  );
}
