import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Author from './Author';
import Content from './Content';
import Tags from './Tags';
import {
 PostWrapper, ArticleWrapper, Back, ArticleDate,
} from './styles';
import { PageTitle } from '../PageTitle';
import { ThemeContext } from '../ThemeContext';

const Post = ({ post }) => {
  const { html, frontmatter, fields } = post;
  const { tags, title, date } = frontmatter;

  const { tagSlugs } = fields;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <PostWrapper themeType={theme}>
            <ArticleWrapper themeType={theme}>
              <PageTitle themeType={theme}>{title}</PageTitle>
              <ArticleDate>
                <i>{`${date}`}</i>
              </ArticleDate>
              <div className="post__content">
                <Content body={html} />
              </div>

              <div className="post__footer">
                <Tags tags={tags} tagSlugs={tagSlugs} />
                <Author />
              </div>
              <Back>
                <Link to={frontmatter.next}>Previous article</Link>
              </Back>
            </ArticleWrapper>
          </PostWrapper>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
