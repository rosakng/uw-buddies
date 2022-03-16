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
  width: 35vw;
  padding-right: 20%;
`;

const Border = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray[5]};
  margin: 10vh 15vw 0vh 30vw;
`;

const CopyRightText = styled.p`
  font-size: ${(props) => props.theme.font.size[2]};
  color: ${(props) => props.theme.colors.gray[8]};
`;

const Info = styled.p`
  font-size: ${(props) => props.theme.font.size[2]};
  color: ${(props) => props.theme.colors.gray[6]};
  margin-right: 5px;
`;

function ActiveLayout({ children }) {
  return (
    <>
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
      <Border>
        <StyledDiv flex justifyContent="center" marginBottom={3}>
          <Info>Survey created with SurveyJS |</Info>
          <CopyRightText>
            © Copyright 2022. Powered with
            <span role="img" aria-label="heart"> 🖤 </span>
            MGTE Team 9
          </CopyRightText>
        </StyledDiv>
      </Border>
    </>
  );
}

export default ActiveLayout;

ActiveLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
