/* eslint-disable prefer-destructuring */
import React from 'react';
import Button from '@mui/material/Button';
import { styled as muiStyled } from '@mui/material/styles';

import UWBuddiesLogo from 'assets/icons/logo';
import theme from 'styles/theme';
import InactiveLayout from 'components/inactive-layout';
import StyledDiv from 'components/styled-div';
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

const Info = styled.p`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[12]};
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;

const Blurb = styled.p`
  color: ${(props) => props.theme.colors.gray[7]};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: ${(props) => props.theme.font.size[3]};
`;

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[10]};
`;

const RegisterButton = muiStyled(Button)(() => ({
  color: theme.colors.white,
  backgroundColor: theme.colors.blue[2],
  '&:hover': {
    backgroundColor: theme.colors.black,
  },
  textTransform: 'capitalize',
  fontWeight: 'normal',
}));

function Home() {
  document.body.style.backgroundColor = theme.colors.gray[0];
  // const navigate = useNavigate();
  // const fcn = () => navigate(ROUTES.____);

  return (
    <InactiveLayout>
      <StyledDiv flex justifyContent="space-between">
        <StyledDiv marginBottom={12}>
          <Title>Find your next buddy!</Title>
          <Subtitle>
            Making new friends doesn&apos;t have to be hard.
            Take 20 minutes to fill out our questionnaire and make a friend!
            <br />
            <br />
            Sign-ups for our beta testing group closes Wednesday, February 16th, 2022 at 11:59pm EST
          </Subtitle>
          <RegisterButton onClick={() => {}}>Sign in / Sign up</RegisterButton>
        </StyledDiv>
        <StyledDiv marginVertical={12}>
          <UWBuddiesLogo size="250vh" />
        </StyledDiv>
      </StyledDiv>
      <HomeContainer>
        <Info>How it works</Info>
        <StyledDiv flex paddingHorizontal={10} justifyContent="space-between">
          <StyledDiv justifyContent="center" width="calc(100vh/3)">
            <StyledDiv flex justifyContent="center">
              <img alt="" src="https://img.icons8.com/emoji/144/000000/memo-emoji.png" />
            </StyledDiv>
            <Blurb center>
              Answer a questionnaire to help us understand your preferences,
              personality type, and interests
            </Blurb>
          </StyledDiv>
          <StyledDiv justifyContent="center" width="calc(100vh/3)">
            <StyledDiv flex justifyContent="center">
              <img alt="" src="https://img.icons8.com/emoji/144/000000/relieved-face.png" />
            </StyledDiv>
            <Blurb center>
              Chill out while others fill out the questionnaire and our system finds your
              next buddy
            </Blurb>
          </StyledDiv>
          <StyledDiv justifyContent="center" width="calc(100vh/3)">
            <StyledDiv flex justifyContent="center">
              <img alt="" src="https://img.icons8.com/emoji/144/000000/folded-hands-emoji.png" />
            </StyledDiv>
            <Blurb center>
              Get your match(es) and start a conversation!
            </Blurb>
          </StyledDiv>
        </StyledDiv>
      </HomeContainer>
      <StyledDiv flex justifyContent="space-evenly" marginTop={13}>
        <StyledDiv flex justifyContent="center" width="calc(100vh/3)">
          <img alt="" src="https://img.icons8.com/emoji/160/000000/laptop-emoji.png" />
        </StyledDiv>
        <StyledDiv width="calc(100vh*0.8)">
          <Subtitle>Effective Matching Algorithm</Subtitle>
          <Blurb>
            Making friends is complex and often serendipitous.
            We don&apos;t try to over-engineer this problem and instead use a persons interests
            and big 5 personality traits as the basis to find matches.
          </Blurb>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv flex justifyContent="space-evenly" marginTop={13}>
        <StyledDiv flex justifyContent="center" width="calc(100vh/3)">
          <img alt="" src="https://img.icons8.com/emoji/160/000000/bullseye.png" />
        </StyledDiv>
        <StyledDiv width="calc(100vh*0.8)">
          <Subtitle>Matches made for you</Subtitle>
          <Blurb>
            Our matching process ensures that we find buddies that meet your unique preferences.
            Don&apos;t care if your next buddy as the same interests as you? No problem!
          </Blurb>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv flex justifyContent="space-evenly" marginVertical={13}>
        <StyledDiv flex justifyContent="center" width="calc(100vh/3)">
          <img alt="" src="https://img.icons8.com/emoji/160/000000/exploding-head.png" />
        </StyledDiv>
        <StyledDiv width="calc(100vh*0.8)">
          <Subtitle>Match with more than one person</Subtitle>
          <Blurb>
            This isn&apos;t a dating site. So if you just so happen to be a good match for
            more than one person, you will be notified!
          </Blurb>
        </StyledDiv>
      </StyledDiv>
      <HomeContainer>
        <Info>Ready to meet your next buddy?</Info>
        <StyledDiv flex justifyContent="center">
          <RegisterButton onClick={() => {}}>Sign in / Sign up</RegisterButton>
        </StyledDiv>
      </HomeContainer>
    </InactiveLayout>
  );
}

export default Home;
