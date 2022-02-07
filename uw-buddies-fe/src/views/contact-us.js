/* eslint-disable prefer-destructuring */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import UWBuddiesLogo from 'assets/icons/logo';
import theme from 'styles/theme';
import Button from 'components/button';
import ROUTES from 'lib/routes';
import InactiveLayout from 'components/inactive-layout';

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
  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  padding: theme.space[14],
  borderRadius: '10px',
  alignContent: 'center',
  textAlign: 'center',
};
function ContactUs() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  const navigate = useNavigate();
  const onLearnClick = () => navigate(ROUTES.AUTHENTICATE);

  return (
    <InactiveLayout>
      <div style={learnStyle}>
        <div style={learnContainerStyle}>
          <UWBuddiesLogo size="200vh" />
          <div style={learnContentStyle}>
            ContactUsView
            <br />
            ContactUsView
          </div>
          <Button inline primary onClick={onLearnClick}>
            Continue
          </Button>

        </div>
      </div>
    </InactiveLayout>
  );
}

export default ContactUs;
