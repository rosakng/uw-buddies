/* eslint-disable no-param-reassign */
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState } from 'react';
import { useEnv } from '../context/env.context';

export const AccessControlLevel = {
  PUBLIC: 'public',
  PROTECTED: 'requires-authentication',
  RBAC: 'requires-role-permission',
  CORS: 'requires-cors-allowed-method',
};

export const useExternalApi = () => {
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [apiResponse, setApiResponse] = useState(
    'waiting for a response',
  );
  const [selectedAccessControlLevel, setSelectedAccessControlLevel] = useState(null);

  const { getAccessTokenSilently } = useAuth0();
  const { apiServerUrl } = useEnv();

  const makeRequest = async (options) => {
    try {
      if (options.authenticated) {
        const token = await getAccessTokenSilently();

        options.config.headers = {
          ...options.config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      const response = await axios(options.config);
      const { data } = response;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }

      return error.message;
    }
  };

  /**
   * This helper function wraps api calls to our backend and adds the bearer token and other
   * important headers to be able to make authenticated api calls
   * @param {String} path is the path that follows hostname/api/
   */
  const getProtectedResource = async (path) => {
    setSelectedAccessControlLevel(AccessControlLevel.PROTECTED);
    setApiEndpoint(`${apiServerUrl}/api/${path}`);

    const config = {
      url: `${apiEndpoint}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    const data = await makeRequest({ config, authenticated: true });

    setApiResponse(JSON.stringify(data, null, 2));
  };

  return {
    selectedAccessControlLevel,
    apiEndpoint,
    apiResponse,
    getProtectedResource,
  };
};
