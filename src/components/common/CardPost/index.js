import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ThemeContext } from '..';
import {
 Item, Post, ArticleContent, ArticleImg, ArticleTitle, Paragraph, Info,
} from './styles';

const CardPost = ({ node }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Item>
          <Post onClick={() => navigate(node.fields.slug)} themeType={theme}>
            <ArticleImg>
              <img alt={node.frontmatter.thumbnail} src={node.frontmatter.thumbnail} />
            </ArticleImg>
            <ArticleContent>
              <ArticleTitle themeType={theme}>{node.frontmatter.title}</ArticleTitle>
              <Paragraph themeType={theme}>{node.excerpt}</Paragraph>
              <Info themeType={theme}>{node.frontmatter.date}</Info>
            </ArticleContent>
          </Post>
        </Item>
      )}
    </ThemeContext.Consumer>
  );
};

CardPost.propTypes = {
  node: PropTypes.object,
};

export { CardPost };
