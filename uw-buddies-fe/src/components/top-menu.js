import React from 'react';
import PropTypes from 'prop-types';
import {
  useResolvedPath, useMatch, Link, useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';

import ROUTES from 'lib/routes';
import theme from 'styles/theme';

import StyledDiv from 'components/styled-div';
import UWBuddiesLogo from 'assets/icons/logo';
import RegisterButton from './auth/register-button';

// import LoginButton from './auth/login-button';

const MenuContainer = styled.header`
  height: ${(props) => props.theme.pageLayout.menuHeight};
  min-width: ${(props) => props.theme.pageLayout.minWidth};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.semibold};
  color: ${(props) => props.theme.colors.black};
`;

const LogoButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.gray[0]};
  text-decoration: none;
  transition: none!important;
  display: flex;
  align-items: center;
  padding-top: ${(props) => props.theme.space[4]};
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray[7]};
  padding-right: ${(props) => props.theme.space[6]};
  font-size: ${(props) => props.theme.font.size[3]};
  display: inline-block;
  width: 100%;
`;

const matchStyle = {
  textDecoration: 'underline',
  color: theme.colors.black,
  paddingRight: theme.space[6],
  fontSize: theme.font.size[3],
  fontWeight: theme.font.weight.semibold,
  display: 'inline-block',
  width: '100%',
};

const noMatchStyle = {
  textDecoration: 'none',
  color: theme.colors.gray[7],
  paddingRight: theme.space[6],
  fontSize: theme.font.size[3],
  display: 'inline-block',
  width: '100%',
};

function MenuLink({
  to, children, external = false,
}) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  if (external) {
    return (
      <div>
        <ExternalLink href={to} target="_blank" rel="noreferrer">{children}</ExternalLink>
      </div>
    );
  }
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
  external: PropTypes.bool,
};

MenuLink.defaultProps = {
  external: false,
};

function TopMenu() {
  const navigate = useNavigate();
  const onLogoClick = () => navigate(ROUTES.HOME);

  return (
    <MenuContainer>
      <StyledDiv flex paddingHorizontal={6} justifyContent="space-between">
        {/* UW BUDDIES LOGO */}
        <LogoButton onClick={onLogoClick}>
          <StyledDiv paddingRight={3}>
            <UWBuddiesLogo size="40vh" />
          </StyledDiv>
          <Title>UW Buddies</Title>
        </LogoButton>
        {/* Sign in / Sign Up */}
        <StyledDiv flex alignItems="center">
          {/* LINKS */}
          <StyledDiv flex>
            <StyledDiv>
              <MenuLink to={ROUTES.LEARN}>Learn More</MenuLink>
            </StyledDiv>
            <StyledDiv>
              <MenuLink to={ROUTES.ABOUT}>Our Team</MenuLink>
            </StyledDiv>
            <StyledDiv>
              <MenuLink external to={ROUTES.FAQ}>FAQ</MenuLink>
            </StyledDiv>
            <StyledDiv>
              <MenuLink external to={ROUTES.CONTACT}>Contact Us</MenuLink>
            </StyledDiv>
          </StyledDiv>
          <RegisterButton />
        </StyledDiv>
      </StyledDiv>
    </MenuContainer>
  );
}

export default TopMenu;
