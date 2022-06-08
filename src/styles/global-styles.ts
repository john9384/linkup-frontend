import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 60.25%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    background-color: ${p => p.theme.background};
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;
