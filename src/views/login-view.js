import React from 'react';

import StyledDiv from 'components/styled-div';
import Button from 'components/button';

function LoginView() {
  return (
    <StyledDiv flex justifyContent="center">
      <Button primary inline onClick={() => {}}>
        Log in
      </Button>
    </StyledDiv>
    // <h1>Log in</h1>
  );
}

export default LoginView;
