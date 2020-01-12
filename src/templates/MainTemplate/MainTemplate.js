import React from 'react';
import PropTypes from 'prop-types';
import { withAuthentication } from 'components/Session/SessionContext';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    {children}
  </ThemeProvider>
);

export default withAuthentication(MainTemplate);

MainTemplate.propTypes = {
  children: PropTypes.object.isRequired,
};
