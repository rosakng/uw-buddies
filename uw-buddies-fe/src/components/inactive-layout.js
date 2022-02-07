import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledDiv from 'components/styled-div';
import Breadcrumbs from 'components/breadcrumbs';
import TopMenu from 'components/top-menu';

const Container = styled.div`
  max-width: ${(props) => props.theme.pageLayout.maxWidth};;
  min-width: ${(props) => props.theme.pageLayout.minWidth};
  margin-right: auto;
  margin-left: auto;
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
