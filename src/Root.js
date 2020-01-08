import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default Root;
