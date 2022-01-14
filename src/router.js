import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ROUTES from 'lib/routes';

import LoginView from 'views/login-view';
import App from 'App';

export default function UWBuddiesRouter() {
  return (
    <Router>
      <App>
        <Routes>
          <Route exact path={ROUTES.LOGIN} element={<LoginView />} />
          {/* TODO: Figure out routes */}
          <Route exact path="/" element={<LoginView />} />
        </Routes>
      </App>
    </Router>
  );
}
