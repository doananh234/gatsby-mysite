import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../..';

const CardFooter = ({ description }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper theme={theme}>
        <p>{description}</p>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

CardFooter.propTypes = {
  description: PropTypes.string,
};

const Wrapper = styled.div`
  padding: 16px 24px;

  p {
    font-size: 16px;
    line-height: 1.46429em;
    margin-bottom: 1rem;
    color: #212121;

    ${({ theme }) => theme === 'dark' && 'color: #fff;'};
  }
`;

export default CardFooter;
