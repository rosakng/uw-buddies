/* eslint-disable prefer-destructuring */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import UWBuddiesLogo from 'assets/icons/logo';
import theme from 'styles/theme';
import Button from 'components/button';
import ROUTES from 'lib/routes';

const homeStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const titleStyle = {
  textAlign: 'center',
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size[14],
  margin: theme.space[3],
};

const homeContainerStyle = {
  backgroundColor: theme.colors.white,
  padding: theme.space[20],
  borderRadius: '10px',
};
function HomeView() {
  document.body.style.backgroundColor = theme.colors.gray[2];
  const navigate = useNavigate();
  const onLearnClick = () => navigate(ROUTES.LEARN);

  return (
    <div style={homeStyle}>
      <div style={titleStyle}>
        UW Buddies
      </div>
      <div style={homeContainerStyle}>
        <UWBuddiesLogo size="200vh" />
        <Button primary onClick={onLearnClick}>
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default HomeView;
