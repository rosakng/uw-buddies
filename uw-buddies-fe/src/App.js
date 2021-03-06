/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';

function App({ children }) {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  children: PropTypes.node.isRequired,
};
