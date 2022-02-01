import React from 'react';
import styled from 'styled-components';

import ROUTES from 'lib/routes';
import theme from 'styles/theme';

import StyledDiv from 'components/styled-div';
import Button from 'components/button';
import PropTypes from 'prop-types';

import {
  useResolvedPath, useMatch, Link,
} from 'react-router-dom';
import UWBuddiesLogo from 'assets/icons/logo';

const MenuContainer = styled.header`
  background: ${(props) => props.theme.colors.blue[2]};
  borderRadius: '10px',
`;

const LinksContainer = styled.header`
  background: ${(props) => props.theme.colors.white};
  borderRadius: '10px',
`;

const matchStyle = {
  textDecoration: 'underline',
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

const titleStyle = {
  fontWeight: theme.font.weight.semibold,
  fontSize: theme.font.size[14],
  color: theme.colors.white,
};

function SideMenu() {
  const currentUser = true; // integrate auth
  const onLogout = () => {};

  return (
    <MenuContainer>
      <StyledDiv flex alignItems="center" padding={10}>
        {/* UW BUDDIES LOGO */}
        <div style={titleStyle}>
          UW Buddies
        </div>
        <UWBuddiesLogo size="40vh" />
      </StyledDiv>
      <LinksContainer>
        {/* MENU LINKS */}
        {currentUser && (
        <StyledDiv>
          <StyledDiv>
            <MenuLink to={ROUTES.DASHBOARD}>Dashboard</MenuLink>
          </StyledDiv>
          <StyledDiv>
            <MenuLink to={ROUTES.QUESTIONNARE}>Questionnare</MenuLink>
          </StyledDiv>
          <StyledDiv>
            <MenuLink to={ROUTES.PROFILE}>Profile</MenuLink>
          </StyledDiv>
          <StyledDiv>
            <MenuLink to={ROUTES.LEARN}>Events</MenuLink>
          </StyledDiv>
          <StyledDiv>
            <MenuLink to={ROUTES.LEARN}>Results</MenuLink>
          </StyledDiv>
        </StyledDiv>
        )}

        {/* LOGOUT */}
        {currentUser && (
        <div style={logoutStyle}>
          {currentUser && <Button inverse onClick={onLogout}>Logout</Button>}
        </div>
        )}
      </LinksContainer>
    </MenuContainer>
  );
}

export default SideMenu;
