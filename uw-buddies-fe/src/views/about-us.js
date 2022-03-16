/* eslint-disable prefer-destructuring */
import React from 'react';

import theme from 'styles/theme';
import InactiveLayout from 'components/inactive-layout';
import styled from 'styled-components';
import Bill from 'assets/images/members/bill.jpeg';
import Derek from 'assets/images/members/derek.jpeg';
import Jeffrey from 'assets/images/members/jeffrey.jpeg';
import Varoon from 'assets/images/members/varoon.jpeg';
import Rosa from 'assets/images/members/rosa.jpeg';
import StyledDiv from 'components/styled-div';
import Member from 'components/member';

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
      <Title>Our Team</Title>
      <Subtitle>
        UW buddies is the capstone project of a group of 4B Management Engineering
        students looking to help others make friends. Meet the team!
      </Subtitle>
      <StyledDiv flex justifyContent="space-between" marginVertical={10}>
        <Member alt="jeffrey" src={Jeffrey} name="Jeffrey Quiambao" position="PM" />
        <Member alt="varoon" src={Varoon} name="Varoon Gupta" position="PM" />
        <Member alt="derek" src={Derek} name="Derek Xu" position="SWE" />
        <Member alt="rosa" src={Rosa} name="Rosa Kang" position="SWE" />
        <Member alt="bill" src={Bill} name="Bill Sheng" position="SWE" />
      </StyledDiv>
    </InactiveLayout>
  );
}

export default AboutUs;
