/* eslint-disable prefer-destructuring */
import React from 'react';

import theme from 'styles/theme';
import InactiveLayout from 'components/inactive-layout';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[13]};
  color: ${(props) => props.theme.colors.black};
`;

const Subtitle = styled.h2`
  margin-top: ${(props) => props.theme.space[6]};
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size[6]};
  color: ${(props) => props.theme.colors.gray[7]};
`;

function AboutUs() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <InactiveLayout>
      <Title>About Us</Title>
      <Subtitle>
        UW buddies is the capstone project of a group of 4B Management Engineering
        students looking to help others make friends. Meet the team!
      </Subtitle>
    </InactiveLayout>
  );
}

export default AboutUs;
