import React from 'react';
import styled from 'styled-components';

import ROUTES from 'lib/routes';
import theme from 'styles/theme';

import Button from 'components/button';
import PropTypes from 'prop-types';

import { useAuth0 } from '@auth0/auth0-react';

import {
  useResolvedPath, useMatch, Link, useNavigate,
} from 'react-router-dom';
import UWBuddiesLogo from 'assets/icons/logo';

const LinksContainer = styled.header`
  background: ${(props) => props.theme.colors.white};
`;

const LogoButton = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.blue[2]};
  height: 13vh;
  width: 15vw;
  text-decoration: none;
  transition: none!important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[10]};
  border-radius: 10px;
`;

const matchStyle = {
  textDecoration: 'none',
  color: theme.colors.black,
  padding: theme.space[7],
  fontSize: theme.font.size[6],
  backgroundColor: theme.colors.gray[0],
  display: 'inline-block',
  width: '100%',
};

const noMatchStyle = {
  textDecoration: 'none',
  color: theme.colors.gray[6],
  padding: theme.space[7],
  fontSize: theme.font.size[6],
  display: 'inline-block',
  width: '100%',
};

const logoutStyle = {
  alignItems: 'center',
  bottom: '0',
};

function MenuLink({ to, children }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={match ? matchStyle : noMatchStyle}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[12]};
  color: ${(props) => props.theme.colors.white};
`;

function SideMenu() {
  const navigate = useNavigate();
  const onLogoClick = () => navigate(ROUTES.DASHBOARD);
  const { user, logout } = useAuth0();
  const onLogout = () => {
    logout({ returnTo: `${window.location.origin}${ROUTES.HOME}` });
  };

  return (
    <div>
      <LogoButton onClick={onLogoClick}>
        {/* UW BUDDIES LOGO */}
        <Title>
          UW Buddies
        </Title>
        <UWBuddiesLogo size="40vh" />
      </LogoButton>
      <LinksContainer>
        {/* MENU LINKS */}
        {user && (
        <div style={{ height: 'calc(100vh - 13vh - 44px)' }}>
          <div>
            <MenuLink to={ROUTES.DASHBOARD}>Dashboard</MenuLink>
          </div>
          <div>
            <MenuLink to={ROUTES.QUESTIONNARE}>Questionnaire</MenuLink>
          </div>
          <div>
            <MenuLink to={ROUTES.PROFILE}>Profile</MenuLink>
          </div>
          <div>
            <MenuLink to={ROUTES.LEARN}>Events</MenuLink>
          </div>
          <div>
            <MenuLink to={ROUTES.LEARN}>Buddies</MenuLink>
          </div>
        </div>
        )}

        {/* LOGOUT */}
        {user && (
        <div style={logoutStyle}>
          {user && <Button inverse onClick={onLogout}>Logout</Button>}
        </div>
        )}
      </LinksContainer>
    </div>
  );
}

export default SideMenu;
