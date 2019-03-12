import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext, Provider, Subscribe } from '..';
import { Header, Footer } from '../../theme';
import './layout.scss';
import './main.scss';

export const Layout = ({ children }) => (
  <Provider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div>
          <Header />
          <LayoutStyled theme={theme}>
            {children}
            <Subscribe />
          </LayoutStyled>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.any,
};

const LayoutStyled = styled.div`
  width: 100%;
  padding-top: 7rem;

  ${({ theme }) => theme === 'dark' && 'background: #212121;'};
`;
