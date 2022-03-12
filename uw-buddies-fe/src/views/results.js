/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActiveLayout from 'components/active-layout';
import theme from 'styles/theme';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import ResultsCard from '../components/results-card';

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
  text-align: center;
`;

const Blurb = styled.p`
  color: ${(props) => props.theme.colors.gray[7]};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-size: ${(props) => props.theme.font.size[3]};
  text-align: center;
`;

function Results() {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(async () => {
    if (!isAuthenticated) {
      navigate('/dashboard');
    }

    const token = await getAccessTokenSilently();

    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://192.168.2.88:5000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMatches(response.matches);
      } catch (error) {
        console.error(error);
      }
    };

    await fetchData();
  }, []);

  document.body.style.backgroundColor = theme.colors.gray[0];

  return (
    <ActiveLayout>
      {matches.length > 0 ? (
        <div>
          <Title>Results</Title>
          {
                matches.map((match) => <ResultsCard {...match} />)
            }
        </div>
      )
        : (
          <div>
            <Subtitle>
              Your buddies will be presented here
            </Subtitle>
            <Blurb>
              Come back next Match Monday to view your matches
            </Blurb>
          </div>
        )}
    </ActiveLayout>
  );
}

export default Results;
