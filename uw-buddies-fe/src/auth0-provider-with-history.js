import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ROUTES from 'lib/routes';
import { useEnv } from './context/env.context';

export default function Auth0ProviderWithHistory({ children }) {
  const navigate = useNavigate();
  const { domain, clientId, audience } = useEnv();
  const redirectUri = `${window.location.origin}${ROUTES.DASHBOARD}`;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.node.isRequired,
};
