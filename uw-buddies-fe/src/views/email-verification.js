/* eslint-disable prefer-destructuring */
import React from 'react';

import UWBuddiesLogo from 'assets/icons/logo';
import ROUTES from 'lib/routes';
import theme from 'styles/theme';
import InactiveLayout from 'components/inactive-layout';
import Button from 'components/button';
import { useAuth0 } from '@auth0/auth0-react';
import StyledDiv from 'components/styled-div';

const learnStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const learnContentStyle = {
  fontSize: `${theme.font.size[6]}`,
  fontWeight: `${theme.font.weight.semibold}`,
  color: `${theme.colors.black}`,
  lineHeight: `${theme.font.lineHeight.loose}`,
  margin: `${theme.space[4]}`,
};

const learnContainerStyle = {
  backgroundColor: theme.colors.white,
  padding: theme.space[14],
  borderRadius: '10px',
  alignContent: 'center',
  textAlign: 'center',
};
const logoutStyle = {
  alignItems: 'center',
  bottom: '0',
};

function EmailVerificationRequired() {
  document.body.style.backgroundColor = theme.colors.gray[0];
  const { user, logout } = useAuth0();
  const onLogout = () => {
    logout({ returnTo: `${window.location.origin}${ROUTES.HOME}` });
  };

  // navigate to third party auth which will redirect to ROUTES.dashboard once user is authenticated

  return (
    <InactiveLayout>
      <StyledDiv height="65vh">
        <div style={learnStyle}>
          <div style={learnContainerStyle}>
            <UWBuddiesLogo size="200vh" />
            <div style={learnContentStyle}>
              Please verify your email to proceed to UW Buddies!
            </div>
            {/* LOGOUT */}
            {user && (
            <div style={logoutStyle}>
              {user && <Button inverse onClick={onLogout}>Logout</Button>}
            </div>
            )}
          </div>
        </div>
      </StyledDiv>
    </InactiveLayout>
  );
}

export default EmailVerificationRequired;
