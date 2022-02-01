import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledDiv from 'components/styled-div';
import SideMenu from 'components/side-menu';
import Breadcrumbs from 'components/breadcrumbs';

const Container = styled.div`
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
`;

function Layout({ children, steps }) {
  return (
    <StyledDiv flex>
      <StyledDiv height="100vh">
        <SideMenu />
        {steps && <Breadcrumbs steps={steps} />}
      </StyledDiv>
      <StyledDiv padding={5}>
        <Container>
          {children}
        </Container>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })),
};

Layout.defaultProps = {
  steps: null,
};
