import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 1px ${(props) => props.theme.colors.gray[4]} solid;
  border-radius: ${(props) => props.theme.borderRadius};
  appearance: none;

  position: relative;
  padding-left: ${(props) => props.theme.space[5]};
  padding-right: ${(props) => props.theme.space[5]};
  height: 44px;
  min-width: 80px;

  color: ${(props) => props.theme.colors.gray[9]};
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: ${(props) => props.theme.font.size[3]};
  line-height: 43px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${(props) => props.inline && `
    display: inline-flex;
    width: auto;
  `}

  &:hover {
    border-color: ${(props) => props.theme.colors.gray[6]};
  }

  &[disabled] {
    color: ${(props) => props.theme.colors.gray[6]};
    border-color: ${(props) => props.theme.colors.gray[2]};
    cursor: default;
    pointer-events: none;
  }

  ${(props) => props.primary && `
    color: white;
    border: none;
    background: ${props.theme.colors.blue[2]};
    font-weight: ${props.theme.font.weight.medium};

    &:hover {
      color: white;
      border: none;
      background: ${props.theme.colors.gray[6]};
    }

    &[disabled] {
      color: ${props.theme.colors.gray[1]};
      background: ${props.theme.colors.gray[5]};
    }
  `}

  ${(props) => props.inverse && `
    color: black;
    border: none;
    background: ${props.theme.colors.white};

    &:hover {
      color: white;
      border: none;
      background: ${props.theme.colors.blue[2]};
    }
  `}

  ${(props) => props.small && `
    height: 34px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: ${props.theme.font.size[3]};
    line-height: 32px;
  `}

  ${(props) => props.link && `
    height: auto;
    line-height: 1px;
    border: none;
    padding-left: 0px;
    padding-right: 0px;
    min-width: 0px;
    color: ${props.theme.colors.blue[0]};
  `}

  ${(props) => props.full && `
  height: 100%;
  width: 100%;
  right: 0;
`}
`;

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  small: PropTypes.bool,
  link: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  inline: false,
  inverse: false,
  small: false,
  link: false,
  type: 'button',
};
