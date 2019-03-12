import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import { ThemeContext } from '..';
import {
  Item,
  Post,
  ArticleContent,
  ArticleImg,
  ArticleTitle,
  Paragraph,
  Info,
  StyledSpan,
} from './styles';

const CardPost = ({ node }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Item>
        <Post onClick={() => navigate(node.fields.slug)} theme={theme}>
          <ArticleImg>
            <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
          </ArticleImg>
          <ArticleContent>
            <ArticleTitle theme={theme}>{node.frontmatter.title}</ArticleTitle>
            <Paragraph theme={theme}>{node.excerpt}</Paragraph>
            <Info theme={theme}>
              {node.frontmatter.date}
              <StyledSpan>
                {node.timeToRead}
                {' '}
min
              </StyledSpan>
            </Info>
          </ArticleContent>
        </Post>
      </Item>
    )}
  </ThemeContext.Consumer>
);

CardPost.propTypes = {
  node: PropTypes.object,
};

export { CardPost };
