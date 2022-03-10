/* eslint-disable prefer-destructuring */
/* eslint-disable */
import React from 'react';

import ActiveLayout from 'components/active-layout';
import theme from 'styles/theme';
import styled from 'styled-components';
import ResultsCard from '../components/results-card'

// Test matches
const matches = [
    {
        name: 'Bill Sheng',
        matchBasis: 'interests',
        program: 'MGTE',
        term: '4B',
        interests: 'hockey, eating, running',
        instagram: 'bill',
        facebook: 'fb.com/bill',
        email: 'bill@uwaterloo.ca',
        contactInfoRevealed: true,
        reachedOut: true
    },
    {
        name: 'Varoon Gupta',
        matchBasis: 'personality',
        program: 'CS',
        term: '3B',
        interests: 'basketball, hiking',
        instagram: 'varoon',
        facebook: 'fb.com/varoon',
        email: 'varoon@uwaterloo.ca',
        contactInfoRevealed: false,
        reachedOut: false
    }
]

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[13]};
  color: ${(props) => props.theme.colors.black};
`;

const CenteredTitle = styled.h1`
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: ${(props) => props.theme.font.size[13]};
  color: ${(props) => props.theme.colors.black};
`;

const Subtitle = styled.h2`
  margin-top: ${(props) => props.theme.space[6]};
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size[6]};
  color: ${(props) => props.theme.colors.gray[7]};
  text-align: center;
`;

const Blurb = styled.p`
  color: ${(props) => props.theme.colors.gray[7]};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: ${(props) => props.theme.font.size[3]};
  text-align: center;
`;



function Results() {
  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <ActiveLayout>
        {matches.length > 0 ? (
        <div>
            <Title>Results</Title>
            {
                matches.map((match, idx) => {
                    return <ResultsCard key={idx} {...match}/>
                })
            }
        </div>
        )
        : 
        <div>
                    <Subtitle>
            Your buddies will be presented here
        </Subtitle>
        <Blurb>
            Come back next Match Monday to view your matches
        </Blurb>
        </div>
        }
    </ActiveLayout>
  );
}

export default Results;
