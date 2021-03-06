/* eslint-disable import/no-named-as-default */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ROUTES from 'lib/routes';
import ProtectedComponent from 'components/auth/protected-component';

import LearnMore from 'views/learn-more';
import Home from 'views/home';
import Results from 'views/results';
import Questionnaire from 'views/questionnaire';
import Auth from 'views/auth';
import App from 'App';
import AboutUs from 'views/about-us';
import How from 'views/how';
import { EnvProvider } from './context/env.context';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

export default function UWBuddiesRouter() {
  return (
    <Router>
      <EnvProvider>
        <Auth0ProviderWithHistory>
          <App>
            <Routes>
              <Route exact path={ROUTES.HOME} element={<Home />} />
              <Route exact path={ROUTES.AUTHENTICATE} element={<Auth />} />
              <Route exact path={ROUTES.LEARN} element={<LearnMore />} />
              <Route exact path={ROUTES.HOW} element={<How />} />
              <Route exact path={ROUTES.ABOUT} element={<AboutUs />} />
              <Route
                exact
                path={ROUTES.QUESTIONNARE}
                element={<ProtectedComponent component={Questionnaire} />}
              />
              <Route
                exact
                path={ROUTES.RESULTS}
                element={<ProtectedComponent component={Results} />}
              />
              {/* TODO: Figure out routes */}
              <Route exact path="/" element={<Home />} />
            </Routes>
          </App>
        </Auth0ProviderWithHistory>
      </EnvProvider>
    </Router>
  );
}
