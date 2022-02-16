import React from 'react';
import Button from '@mui/material/Button';
import { styled as muiStyled } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';

import theme from 'styles/theme';

const StyledButton = muiStyled(Button)(() => ({

  color: theme.colors.white,
  backgroundColor: theme.colors.blue[2],
  '&:hover': {
    backgroundColor: theme.colors.black,
  },
  width: '9vw',
  textTransform: 'capitalize',
  fontWeight: 'normal',
}));

export default function RegisterButton() {
  const { loginWithRedirect } = useAuth0();
  const onSignUpClick = () => loginWithRedirect();
  return (
    <StyledButton onClick={onSignUpClick}>Sign in / Sign up</StyledButton>
  );
}
