import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledDiv from 'components/styled-div';
import Breadcrumbs from 'components/breadcrumbs';
import TopMenu from 'components/top-menu';

const Container = styled.div`
  max-width: ${(props) => props.theme.pageLayout.maxWidth};
  min-width: ${(props) => props.theme.pageLayout.minWidth};
  margin-right: auto;
  margin-left: auto;
`;

const BorderContainer = styled.div`
  width: 100vw;
  bottom: 0px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.gray[0]};
  align-content: center;
`;

const Border = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray[5]};
  width: 50vw;
  transform: translate(50%, 0%);
`;

const CopyRightText = styled.p`
  font-size: ${(props) => props.theme.font.size[2]};
  color: ${(props) => props.theme.colors.gray[8]};
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const InactiveContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.gray[0]};
  }
`;

function InactiveLayout({ children, steps }) {
  return (
    <InactiveContainer>
      <TopMenu />
      {steps && <Breadcrumbs steps={steps} />}
      <StyledDiv padding={5}>
        <Container>
          {children}
        </Container>
      </StyledDiv>
      <BorderContainer>
        <Border>
          <CopyRightText>
            © Copyright 2022. Powered with
            <span role="img" aria-label="heart"> 🖤 </span>
            MGTE Team 9
          </CopyRightText>
        </Border>
      </BorderContainer>
    </InactiveContainer>
  );
}

export default InactiveLayout;

InactiveLayout.propTypes = {
  children: PropTypes.node.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })),
};

InactiveLayout.defaultProps = {
  steps: null,
};
