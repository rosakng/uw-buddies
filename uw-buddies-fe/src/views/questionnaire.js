/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';

import ActiveLayout from 'components/active-layout';
import theme from 'styles/theme';
import styled from 'styled-components';
import Button from 'components/button';
import surveyJson from 'components/survey/surveyJson';
import 'survey-react/modern.min.css';
import 'views/questionnaire.css';
import {
  StylesManager, Model, Survey,
} from 'survey-react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useEnv } from 'context/env.context';
import { getUserPayload } from 'components/survey/surveyHelper';
import { snakeCaseObject } from 'lib/utils';
import StyledDiv from 'components/styled-div';

const defaultThemeColorsSurvey = StylesManager
  .ThemeColors.modern;
defaultThemeColorsSurvey['$main-color'] = theme.colors.blue[2];
defaultThemeColorsSurvey['$main-hover-color'] = theme.colors.blue[2];
defaultThemeColorsSurvey['$header-color'] = theme.colors.blue[2];
defaultThemeColorsSurvey['$body-font-weight'] = 100;

StylesManager
  .applyTheme('modern');

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

function Questionnaire() {
  document.body.style.backgroundColor = theme.colors.gray[0];
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const endpoint = `${useEnv().apiServerUrl}/user`;

  const survey = new Model(surveyJson);

  const [showSurvey, setShowSurvey] = useState(false);

  let body;

  async function createUser(sender) {
    if (!isAuthenticated) {
      return;
    }
    const token = await getAccessTokenSilently();

    const userPayload = snakeCaseObject(getUserPayload(sender, user));
    // eslint-disable-next-line dot-notation
    userPayload['_id'] = user.sub;

    axios.post(endpoint, {
      user: userPayload,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
  }

  if (showSurvey) {
    const onComplete = () => {
      createUser(survey);
    };

    body = <Survey model={survey} onComplete={onComplete} />;
  } else {
    body = (
      <StyledDiv height="65vh">
        <Subtitle>
          Your survey results will be collected to determine your matches.
          <br />
          <br />
          Your survey is 0% complete.
        </Subtitle>
        <Button inline primary onClick={() => setShowSurvey(true)}>Start</Button>
      </StyledDiv>
    );
  }
  return (
    <ActiveLayout>
      <Title>Questionnaire</Title>
      {body}
    </ActiveLayout>
  );
}

export default Questionnaire;
