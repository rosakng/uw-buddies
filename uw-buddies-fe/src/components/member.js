import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MemberDiv = styled.div`
  width: 13vw;
  height: auto;
  border: 1px solid ${(props) => props.theme.colors.gray[6]};
  text-align: center;
  background-color: ${(props) => props.theme.colors.gray[3]};
  border-radius: 2px;
`;

const MemberImg = styled.img`
  border-radius: 50%;
  margin-top: 15%;
`;

const MemberName = styled.p`
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size[5]};
  color: ${(props) => props.theme.colors.gray[7]};
`;

function Member({
  alt, width, height, src, name, position,
}) {
  return (
    <MemberDiv>
      <MemberImg alt={alt} src={src} width={width} height={height} />
      <MemberName>
        {name}
        <br />
        {position}
      </MemberName>
    </MemberDiv>
  );
}

export default Member;

Member.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

Member.defaultProps = {
  width: '140vw',
  height: '140vh',
};
