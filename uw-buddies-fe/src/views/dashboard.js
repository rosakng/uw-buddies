/* eslint-disable prefer-destructuring */
import React from 'react';

import StyledDiv from 'components/styled-div';
import ActiveLayout from 'components/active-layout';
import theme from 'styles/theme';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[13]};
  color: ${(props) => props.theme.colors.black};
`;

function Dashboard() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <ActiveLayout>
      <StyledDiv justifyContent="center">
        <Title>Dashboard</Title>
      </StyledDiv>
    </ActiveLayout>
  );
}

export default Dashboard;
