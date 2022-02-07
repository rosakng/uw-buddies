import React from 'react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

const isEnvValid = domain && clientId && audience && apiServerUrl;

if (!isEnvValid) {
  throw new Error('Missing environment variables.');
}

const dotenv = {
  domain,
  clientId,
  audience,
  apiServerUrl,
};

export const EnvContext = React.createContext(dotenv);

export const useEnv = () => {
  const context = React.useContext(EnvContext);
  if (!context) {
    throw new Error('useEnv must be used within a EnvProvider');
  }
  return context;
};

export function EnvProvider(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <EnvContext.Provider value={dotenv} {...props} />;
}
