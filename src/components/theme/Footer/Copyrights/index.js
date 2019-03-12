import React from 'react';
import { Link } from 'gatsby';
import { SmallerContainer, GithubIcon, ThemeContext } from '../../../common';
import gatsbyIcon from '../../../../../static/footer/gatsby.svg';
import netlifyIcon from '../../../../../static/footer/netlify.svg';
import { Wrapper, Links, Item } from './styles';

const Copyrights = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper as={SmallerContainer} theme={theme}>
        <Links>
          ©
          {' '}
          <Item as={Link} to="/">
            doananh234
          </Item>
          {' '}
          2016-
          {`${new Date().getFullYear()} `}
          Built with
          <a href="https://www.gatsbyjs.org" rel="noopener noreferrer" target="_blank">
            <Item src={gatsbyIcon} img alt="Gatssby js" />
          </a>
          Open sourced on
          <a
            href="https://github.com/doananh234/doananh234.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item
              as={GithubIcon}
              img
              width="24"
              height="24"
              color={theme === 'dark' ? '#fff' : '#000'}
            />
          </a>
          and deployed on
          <a href="https://www.netlify.com" rel="noopener noreferrer" target="_blank">
            <Item src={netlifyIcon} img alt="Netlify" />
          </a>
        </Links>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

export default Copyrights;
