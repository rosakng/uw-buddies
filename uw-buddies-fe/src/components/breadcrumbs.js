import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[4]};
  height: ${(props) => props.theme.pageLayout.menuHeight};
  background-color: ${(props) => props.theme.colors.gray[3]};
`;

const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.font.size[9]};
  text-decoration: none;
  line-height: ${(props) => props.theme.font.lineHeight.loose};
  padding: ${(props) => props.theme.space[4]};
  color: ${(props) => props.theme.colors.gray[6]};
  margin-right: ${(props) => props.theme.space[4]};
`;

function Breadcrumbs({ steps }) {
  return (
    <BreadcrumbContainer>
      {steps.map((step, i) => {
        const StepLink = (
          <StyledLink replace to={step.linkTo}>
            {step.title}
          </StyledLink>
        );

        return (
          <Fragment key={`${step.linkTo}-${step.title}`}>
            {StepLink}
            {(i < steps.length - 1) && (
            <div />
            )}
          </Fragment>
        );
      })}
    </BreadcrumbContainer>
  );
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })).isRequired,
};
