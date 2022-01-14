import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import App from 'App';

import LoginView from 'views/login-view';

test('Login View', () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App>
          <LoginView />
        </App>
      </BrowserRouter>
    </ThemeProvider>,
  );
  expect(screen.getByRole('button')).toHaveTextContent('Log in');
});
