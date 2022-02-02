/* eslint-disable prefer-destructuring */
import React from 'react';

import StyledDiv from 'components/styled-div';
import Layout from 'components/layout';
import theme from 'styles/theme';

function QuestionnareView() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <Layout>
      <StyledDiv justifyContent="center">
        This is the questionnare page
      </StyledDiv>
    </Layout>
  );
}

export default QuestionnareView;
