import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ROUTES from 'lib/routes';

import LearnMoreView from 'views/learn-more-view';
import HomeView from 'views/home-view';
import DashboardView from 'views/dashboard-view';
import ProfileView from 'views/profile-view';
import QuestionnareView from 'views/questionnare-view';
import AuthView from 'views/auth-view';
import App from 'App';

export default function UWBuddiesRouter() {
  return (
    <Router>
      <App>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<HomeView />} />
          <Route exact path={ROUTES.AUTHENTICATE} element={<AuthView />} />
          <Route exact path={ROUTES.LEARN} element={<LearnMoreView />} />
          <Route exact path={ROUTES.QUESTIONNARE} element={<QuestionnareView />} />
          <Route exact path={ROUTES.DASHBOARD} element={<DashboardView />} />
          <Route exact path={ROUTES.PROFILE} element={<ProfileView />} />
          {/* TODO: Figure out routes */}
          <Route exact path="/" element={<HomeView />} />
        </Routes>
      </App>
    </Router>
  );
}
