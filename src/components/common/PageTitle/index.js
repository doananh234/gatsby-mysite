import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '..';
import { StyledTitle } from './styles';

export const PageTitle = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => <StyledTitle themeType={theme}>{children}</StyledTitle>}
  </ThemeContext.Consumer>
);

PageTitle.propTypes = {
  children: PropTypes.any,
};
