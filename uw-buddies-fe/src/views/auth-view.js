/* eslint-disable prefer-destructuring */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import UWBuddiesLogo from 'assets/icons/logo';
import theme from 'styles/theme';
import Button from 'components/button';
import ROUTES from 'lib/routes';

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
function AuthView() {
  document.body.style.backgroundColor = theme.colors.gray[2];

  const navigate = useNavigate();
  const onSignUpClick = () => navigate(ROUTES.DASHBOARD); // navigate to third party auth

  return (
    <div style={learnStyle}>
      <div style={learnContainerStyle}>
        <UWBuddiesLogo size="200vh" />
        <div style={learnContentStyle}>
          This is how auth works
          <br />
          what we do with your email
        </div>
        <Button inline primary onClick={onSignUpClick}>
          Sign In / Register
        </Button>

      </div>
    </div>
  );
}

export default AuthView;
