import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Box, Avatar, Checkbox,
} from '@mui/material/';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from './button';

function ResultsCard(props) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const
    {
      name,
      matchBasis,
      program,
      term,
      interests,
      contactInfoRevealed,
      reachedOut,
      instagram,
      email,
      facebook,
    } = props;

  const [reveal, setReveal] = useState(contactInfoRevealed);
  const [reached, setReached] = useState(reachedOut);

  async function revealContactInfo() {
    setReveal(true);
    if (!isAuthenticated) {
      return;
    }

    const token = await getAccessTokenSilently();

    await axios.put('http://192.168.2.88:5000/api/user/matches', {
      matchEmail: email,
      updateObject: {
        'matches.$.contactInfoRevealed': true,
      },
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((e) => {
      console.error(e);
    });
  }

  async function toggleReachedOut() {
    const newState = !reached;
    setReached(newState);

    if (!isAuthenticated) {
      return;
    }

    const token = await getAccessTokenSilently();

    await axios.put('http://192.168.2.88:5000/api/user/matches', {
      matchEmail: email,
      updateObject: {
        'matches.$.reachedOut': newState,
      },
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((e) => {
      console.error(e);
    });
  }

  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Avatar sx={{ width: '150px', height: '150px', alignSelf: 'center' }} />
        <Box sx={{ width: '65%', alignSelf: 'center', marginLeft: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
            <Typography variant="h5" color="text.primary" component="div">
              {name}
            </Typography>
            <Typography sx={{ alignSelf: 'flex-end', marginLeft: '10px' }} variant="subtitle1" color="text.secondary" component="div">
              match on
              {' '}
              {matchBasis}
            </Typography>
          </Box>
          <Typography sx={{ marginBottom: '15px' }} variant="subtitle2" color="text.primary" component="div">
            {program}
            {' '}
            {term}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle2" color="text.primary" component="div">
              Interests: &nbsp;
            </Typography>
            <Typography sx={{ alignSelf: 'flex-end' }} variant="subtitle2" color="text.secondary" component="div">
              {interests}
            </Typography>
          </Box>
        </Box>
        {reveal
          ? (
            <Box sx={{
              display: 'flex', width: '50%', height: '100px', alignSelf: 'center', flexDirection: 'row',
            }}
            >
              <Box sx={{ marginRight: '30px', width: '200px' }}>
                {
                  instagram
                    ? (
                      <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <InstagramIcon />
                        {' '}
&nbsp;
                        <Typography sx={{ alignSelf: 'flex-end' }} variant="subtitle2" color="text.secondary" component="div">
                          {instagram}
                        </Typography>
                      </Box>
                    )
                    : null
                }
                {
                  facebook
                    ? (
                      <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <FacebookIcon />
                        {' '}
&nbsp;
                        <Typography sx={{ alignSelf: 'flex-end' }} variant="subtitle2" color="text.secondary" component="div">
                          {facebook}
                        </Typography>
                      </Box>
                    )
                    : null
                }

                <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                  <MailIcon />
                  {' '}
&nbsp;
                  <Typography sx={{ alignSelf: 'flex-end' }} variant="subtitle2" color="text.secondary" component="div">
                    {email}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                width: '150px', display: 'flex', flexDirection: 'column', marginBottom: '10px', backgroundColor: '#6177ef', color: 'white',
              }}
              >
                <Typography sx={{ alignSelf: 'center', marginTop: '20px' }} variant="subtitle2" component="div">
                  Reached Out?
                </Typography>
                <Checkbox onChange={() => toggleReachedOut()} defaultChecked={reachedOut} sx={{ paddingTop: '0px', color: 'white', '&.Mui-checked': { color: 'white' } }} />
              </Box>
            </Box>
          )
          : (
            <Box sx={{ width: '50%' }}>
              <Button onClick={() => revealContactInfo()} primary full>
                Click to Reveal
              </Button>
            </Box>
          )}
      </CardContent>
    </Card>
  );
}

export default ResultsCard;

ResultsCard.propTypes = {
  name: PropTypes.string.isRequired,
  matchBasis: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  interests: PropTypes.string.isRequired,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  email: PropTypes.string.isRequired,
  reachedOut: PropTypes.bool.isRequired,
  contactInfoRevealed: PropTypes.bool.isRequired,
};

ResultsCard.defaultProps = {
  instagram: null,
  facebook: null,
};
