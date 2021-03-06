/* eslint-disable prefer-destructuring */
import React from 'react';

import UWBuddiesLogo from 'assets/icons/logo';
import theme from 'styles/theme';
import InactiveLayout from 'components/inactive-layout';
import RegisterButton from 'components/auth/register-button';

const learnStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const learnContentStyle = {
  fontSize: `${theme.font.size[6]}`,
  fontWeight: `${theme.font.weight.semibold}`,
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
function Auth() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  // navigate to third party auth which will redirect to ROUTES.dashboard once user is authenticated

  return (
    <InactiveLayout>
      <div style={learnStyle}>
        <div style={learnContainerStyle}>
          <UWBuddiesLogo size="200vh" />
          <div style={learnContentStyle}>
            This is how auth works
            <br />
            what we do with your email
          </div>
          <RegisterButton />
        </div>
      </div>
    </InactiveLayout>
  );
}

export default Auth;
