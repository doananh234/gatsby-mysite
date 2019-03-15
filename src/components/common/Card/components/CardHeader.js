import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeConfig from '../../../../config/theme';
import { ThemeContext } from '../..';

const CardHeader = ({ title }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper theme={theme}>
        <h3>{title}</h3>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

CardHeader.propTypes = {
  title: PropTypes.any,
};

const Wrapper = styled.div`
  padding: 1rem;

  h3 {
    font-size: 0.9em;
    margin: 0;
    font-weight: normal;

    @media (max-width: 680px) {
      font-size: 1.2em;
    }
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
`;

export default CardHeader;
