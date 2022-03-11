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

  const survey = new Model(surveyJson);

  const [showSurvey, setShowSurvey] = useState(false);

  let body;

  if (showSurvey) {
    const onComplete = () => {
      console.log(`Survey results: ${JSON.stringify(survey.data)}`);
    };
    body = <Survey model={survey} onComplete={onComplete} />;
  } else {
    body = (
      <>
        <Subtitle>
          Your survey results will be collected to determine your matches.
          <br />
          <br />
          Your survey is 0% complete.
        </Subtitle>
        <Button inline primary onClick={() => setShowSurvey(true)}>Start</Button>
      </>
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
