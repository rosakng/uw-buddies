/* eslint-disable prefer-destructuring */
import React from 'react';

import StyledDiv from 'components/styled-div';
import Layout from 'components/layout';
import theme from 'styles/theme';

function ProfileView() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <Layout>
      <StyledDiv justifyContent="center">
        This is the profile page
      </StyledDiv>
    </Layout>
  );
}

export default ProfileView;
