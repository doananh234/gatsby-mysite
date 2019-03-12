import React from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import { Link } from 'gatsby';
import { SocialShare, PageTitle, ThemeContext } from '..';
import {
 ArticleWrapper, Back, Content, Comments, ArticleDate,
} from './styles';

export const Post = ({ html, frontmatter, timeToRead }) => (
  <ThemeContext.Consumer>
    {({ theme }) => {
      const disqusShortName = 'https-doananh234-com';
      const disqusConfig = {
        url: frontmatter.url,
        identifier: frontmatter.id,
        title: frontmatter.title,
      };
      return (
        <ArticleWrapper theme={theme}>
          <PageTitle>{frontmatter.title}</PageTitle>
          <ArticleDate>
            <i>
              {frontmatter.date}
              {' '}
-
            </i>
            <i>
              {timeToRead}
              {' '}
min read
            </i>
          </ArticleDate>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <SocialShare {...frontmatter} />
          <Back>
            <Link to={frontmatter.next}>Previous article</Link>
          </Back>
          <Comments>
            <Disqus.DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
          </Comments>
        </ArticleWrapper>
      );
    }}
  </ThemeContext.Consumer>
);

Post.propTypes = {
  html: PropTypes.any,
  frontmatter: PropTypes.any,
  timeToRead: PropTypes.any,
};

export default Post;
