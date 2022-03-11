/* eslint-disable prefer-destructuring */
import React from 'react';
import TeamImg from 'assets/images/team.png';

import theme from 'styles/theme';
import InactiveLayout from 'components/inactive-layout';
import styled from 'styled-components';
import StyledDiv from 'components/styled-div';
import RegisterButton from 'components/auth/register-button';

const Container = styled.div`
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

const centerStyle = { display: 'flex', justifyContent: 'center' };

function How() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <InactiveLayout>
      <Container>
        <StyledDiv paddingTop={10}>
          <img src={TeamImg} alt="Team" width="300vw" />
        </StyledDiv>
        <Subtitle>
          We&apos;re here to make finding new friends easier!
        </Subtitle>
        <div style={centerStyle}>
          <div>
            <Blurb>
              📝 Fill out our questionnaire so we can understand your preferences,
              personality type, and interests
            </Blurb>
            <Blurb>
              ❄️ Chill out while others in your cohort fill out the questionnaire
              and our system finds you your next buddy
            </Blurb>
            <Blurb>
              🤝 Get your match(es) and start a conversation!
            </Blurb>
            <div style={centerStyle}>
              <RegisterButton onClick={() => {}}>Sign in / Sign up</RegisterButton>
            </div>
          </div>
        </div>
        <div />
      </Container>
    </InactiveLayout>
  );
}

export default How;
