import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledDiv from 'components/styled-div';
import SideMenu from 'components/side-menu';

const Container = styled.div`
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
`;

function ActiveLayout({ children }) {
  return (
    <StyledDiv flex>
      <StyledDiv height="100vh" paddingRight={12}>
        <SideMenu />
      </StyledDiv>
      <StyledDiv padding={5}>
        <Container>
          {children}
        </Container>
      </StyledDiv>
    </StyledDiv>
  );
}

export default ActiveLayout;

ActiveLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
