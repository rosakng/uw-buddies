import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'styles/theme';

/**
 *
 * WARNING: Before changing this file, please strongly consider whether your change is
 * necessary (we want to avoid unexpected bugs in other views).
 * This code is meant to be shared by many views throughout our app and should not
 * contain logic specifc to how your view is using it.
 *
 */

const flexbox = (props) => ({
  display: props.flex ? 'flex' : undefined,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
});

flexbox.propTypes = {
  flex: PropTypes.bool,
  flexDirection: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justifyContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between']),
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between']),
};

const getSpacing = (index) => theme.space[index];

const spacing = (props) => ({
  paddingBottom: getSpacing(props.paddingBottom || props.paddingVertical || props.padding),
  paddingLeft: getSpacing(props.paddingLeft || props.paddingHorizontal || props.padding),
  paddingRight: getSpacing(props.paddingRight || props.paddingHorizontal || props.padding),
  paddingTop: getSpacing(props.paddingTop || props.paddingVertical || props.padding),

  marginBottom: getSpacing(props.marginBottom || props.marginVertical || props.margin),
  marginLeft: getSpacing(props.marginLeft || props.marginHorizontal || props.margin),
  marginRight: getSpacing(props.marginRight || props.marginHorizontal || props.margin),
  marginTop: getSpacing(props.marginTop || props.marginVertical || props.margin),
});

spacing.propTypes = {
  margin: PropTypes.number,
  marginBottom: PropTypes.number,
  marginHorizontal: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginVertical: PropTypes.number,
  padding: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingVertical: PropTypes.number,
};

const size = (props) => ({
  maxWidth: props.maxWidth,
  width: props.width || props.size,
  height: props.height || props.size,
});

size.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const StyledDiv = styled.div`
  ${flexbox}
  ${spacing}
  ${size}
`;

export default StyledDiv;

StyledDiv.propTypes = {
  ...flexbox.propTypes,
  ...spacing.propTypes,
  ...size.propTypes,
};
