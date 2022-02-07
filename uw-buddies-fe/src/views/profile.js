/* eslint-disable prefer-destructuring */
import React from 'react';

import ActiveLayout from 'components/active-layout';
import theme from 'styles/theme';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[13]};
  color: ${(props) => props.theme.colors.black};
`;

function Profile() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <ActiveLayout>
      <Title>Profile</Title>
    </ActiveLayout>
  );
}

export default Profile;
