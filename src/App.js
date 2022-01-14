import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
    // <App />
    // <h1>Hello</h1>
  );
}

export default App;

App.propTypes = {
  children: PropTypes.node.isRequired,
};
