import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledDiv from 'components/styled-div';
import SideMenu from 'components/side-menu';

const Container = styled.div`
  height: 100%;
  margin-right: 10vw;
  margin-left: 25vw;
`;

const SideMenuDiv = styled.div`
  height: 100%;
  position: fixed;
  width: 80%;
  padding-right: 20%;
`;

function ActiveLayout({ children }) {
  return (
    <StyledDiv flex>
      <SideMenuDiv>
        <SideMenu />
      </SideMenuDiv>
      <StyledDiv padding={5} width="100vw">
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
