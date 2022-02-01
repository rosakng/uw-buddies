import React from 'react';
import PropTypes from 'prop-types';
import StyledDiv from 'components/styled-div';
import Logo from 'assets/icons/logo.svg';

function UWBuddiesLogo({ size }) {
  return (
    <StyledDiv>
      <img alt="uw buddies logo" src={Logo} width={size} height={size} />
    </StyledDiv>
  );
}

export default UWBuddiesLogo;

UWBuddiesLogo.propTypes = {
  size: PropTypes.string,
};

UWBuddiesLogo.defaultProps = {
  size: '54',
};
