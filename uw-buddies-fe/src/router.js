import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ROUTES from 'lib/routes';

import LearnMore from 'views/learn-more';
import Home from 'views/home';
import Dashboard from 'views/dashboard';
import Profile from 'views/profile';
import Questionnaire from 'views/questionnaire';
import Auth from 'views/auth';
import App from 'App';
import AboutUs from 'views/about-us';
import ContactUs from 'views/contact-us';

export default function UWBuddiesRouter() {
  return (
    <Router>
      <App>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.AUTHENTICATE} element={<Auth />} />
          <Route exact path={ROUTES.LEARN} element={<LearnMore />} />
          <Route exact path={ROUTES.ABOUT} element={<AboutUs />} />
          <Route exact path={ROUTES.CONTACT} element={<ContactUs />} />
          <Route exact path={ROUTES.QUESTIONNARE} element={<Questionnaire />} />
          <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route exact path={ROUTES.PROFILE} element={<Profile />} />
          {/* TODO: Figure out routes */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </App>
    </Router>
  );
}
