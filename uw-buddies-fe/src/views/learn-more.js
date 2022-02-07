/* eslint-disable prefer-destructuring */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProblemDiscoveryImg from 'assets/images/problem-discovery.png';

import theme from 'styles/theme';
import Button from 'components/button';
import ROUTES from 'lib/routes';
import InactiveLayout from 'components/inactive-layout';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import StyledDiv from 'components/styled-div';

const LearnContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[10]};
  align-content: center;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-top: ${(props) => props.theme.space[6]};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  font-size: ${(props) => props.theme.font.size[6]};
  color: ${(props) => props.theme.colors.gray[7]};
`;

const Blurb = styled.p`
  color: ${(props) => props.theme.colors.gray[7]};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: ${(props) => props.theme.font.size[3]};
`;

const NextButton = muiStyled(Button)(() => ({
  color: theme.colors.white,
  backgroundColor: theme.colors.blue[2],
  '&:hover': {
    backgroundColor: theme.colors.black,
  },
  width: '10vw',
  textTransform: 'capitalize',
  fontWeight: 'normal',
}));

const centerStyle = { display: 'flex', justifyContent: 'center' };

function LearnMore() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  const navigate = useNavigate();
  const onNextClick = () => navigate(ROUTES.HOW);

  return (
    <InactiveLayout>
      <LearnContainer>
        <StyledDiv paddingTop={10}>
          <img src={ProblemDiscoveryImg} alt="Problem Discovery" width="700vw" />
        </StyledDiv>
        <Subtitle>
          Remote learning has made making new friends harder than ever
        </Subtitle>
        <div style={centerStyle}>
          <div>
            <Blurb>😢 57.5% of students struggled to socialize in first year</Blurb>
            <Blurb>
              😢 Remote learning has prevented thousands of students from making new friends
            </Blurb>
            <Blurb>
              😢 No flexible, inclusive and effective way exists for students to make new friends
            </Blurb>
            <div style={centerStyle}>
              <NextButton onClick={onNextClick}>
                Next
              </NextButton>
            </div>
          </div>
        </div>
        <div />
      </LearnContainer>
    </InactiveLayout>
  );
}

export default LearnMore;
