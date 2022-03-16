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

const Border = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[5]};
  margin: 10vh 20vw 0vh 20vw;
`;

const CopyRightText = styled.p`
  font-size: ${(props) => props.theme.font.size[2]};
  color: ${(props) => props.theme.colors.gray[8]};
  text-align: center;
`;

function InactiveLayout({ children, steps }) {
  return (
    <StyledDiv paddingBottom={6}>
      <TopMenu />
      {steps && <Breadcrumbs steps={steps} />}
      <StyledDiv padding={5}>
        <Container>
          {children}
        </Container>
      </StyledDiv>
      <Border />
      <CopyRightText>
        © Copyright 2022. Powered with
        <span role="img" aria-label="heart"> 🖤 </span>
        MGTE Team 9
      </CopyRightText>
    </StyledDiv>
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
