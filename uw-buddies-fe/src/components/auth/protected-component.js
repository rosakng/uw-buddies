import React from 'react';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import PropTypes from 'prop-types';

function ProtectedComponent({ component, ...args }) {
  const { user } = useAuth0();
  const Component = withAuthenticationRequired(component);

  return user && user.email_verified
    // eslint-disable-next-line react/jsx-props-no-spreading
    ? <Component {...args} />
    : <div>placeholder for verify email page</div>; // TODO redirect to verify email page
}

ProtectedComponent.propTypes = {
  component: PropTypes.node.isRequired,
};

export default ProtectedComponent;
