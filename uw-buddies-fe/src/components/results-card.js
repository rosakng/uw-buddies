import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { styled as muiStyled } from '@mui/material/styles';
/* eslint-disable */
import React, {useState} from 'react';
import {
  Card, CardContent, Typography, Box, Avatar, Checkbox
} from '@mui/material/';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Button from '../components/button';

function ResultsCard(props) {
  const [reveal, toggleReveal] = useState(props.contactInfoRevealed)

  return (
    <Card sx={{marginBottom: '20px'}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Avatar sx={{width: '150px', height: '150px', alignSelf:'center' }}/>
            <Box sx={{width: '65%', alignSelf:'center', marginLeft: '20px' }}>  
              <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '15px'}}>
                <Typography variant="h5" color="text.primary" component="div">
                  {props.name}
                </Typography>
                <Typography sx={{alignSelf: 'flex-end', marginLeft: '10px'}} variant="subtitle1" color="text.secondary" component="div">
                  match on {props.matchBasis}
                </Typography>
              </Box>
              <Typography sx={{marginBottom: '15px' }} variant="subtitle2" color="text.primary" component="div">
                {props.program} {props.term}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant="subtitle2" color="text.primary" component="div">
                  Interests: &nbsp;
                </Typography>
                <Typography sx={{alignSelf: 'flex-end'}} variant="subtitle2" color="text.secondary" component="div">
                {props.interests}
                </Typography>
              </Box>
            </Box>
            {reveal ? 
              <Box sx={{display: 'flex', width: '50%', alignSelf: 'center', flexDirection: 'row'}}> 
              <Box sx={{marginRight: '30px', width: '200px'}}>
                <Box sx={{display:'flex', flexDirection: 'row', marginBottom:'10px'}}>
                    <InstagramIcon/> &nbsp;
                    <Typography sx={{alignSelf: 'flex-end'}} variant="subtitle2" color="text.secondary" component="div">
                      {props.instagram}
                    </Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection: 'row', marginBottom:'10px'}}>
                    <FacebookIcon/> &nbsp;
                    <Typography sx={{alignSelf: 'flex-end'}} variant="subtitle2" color="text.secondary" component="div">
                      {props.facebook}
                    </Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection: 'row', marginBottom:'10px'}}>
                    <MailIcon/> &nbsp;
                    <Typography sx={{alignSelf: 'flex-end'}} variant="subtitle2" color="text.secondary" component="div">
                      {props.email}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{width: '150px', display:'flex', flexDirection: 'column', marginBottom:'10px', backgroundColor:'#6177ef', color: 'white'}}>
                  <Typography sx={{alignSelf: 'center', marginTop: '20px'}} variant="subtitle2" component="div">
                      Reached Out?
                    </Typography>
                  <Checkbox defaultChecked={props.reachedOut} sx={{paddingTop: '0px', color: 'white', '&.Mui-checked': {color: 'white'}}}/>
                </Box>
              </Box>
          : 
          
              <Box sx={{ width: '50%'}}>
                <Button onClick={() => toggleReveal(true)} primary full>
                  Click to Reveal
                </Button>
              </Box>
            }
        </CardContent>
    </Card>
  );
}

export default ResultsCard;

ResultsCard.propTypes = {
  name: PropTypes.string,
  matchBasis: PropTypes.string,
  program: PropTypes.string,
  term: PropTypes.string,
  interests: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  email: PropTypes.string,
};