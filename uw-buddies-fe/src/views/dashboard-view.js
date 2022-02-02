/* eslint-disable prefer-destructuring */
import React from 'react';

import StyledDiv from 'components/styled-div';
import Layout from 'components/layout';
import theme from 'styles/theme';

function DashboardView() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <Layout>
      <StyledDiv justifyContent="center">
        This is the dashboard
      </StyledDiv>
    </Layout>
  );
}

export default DashboardView;
