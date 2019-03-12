import React from 'react';
import { graphql } from 'gatsby';
import {
 Layout, SmallerContainer, SEO, Post,
} from '../components/common';
import { Highlight } from './highlight';

const Template = ({ data: { post } }) => (
  <Highlight>
    <Layout>
      <SmallerContainer>
        <SEO
          type="NewsArticle"
          title={post.frontmatter.title}
          articleBody={post.html}
          datePublished={post.frontmatter.date}
          dateModified={post.frontmatter.edited ? post.frontmatter.edited : post.frontmatter.date}
          cover={post.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
          location={post.frontmatter.path}
        />
        <Post {...post} />
      </SmallerContainer>
    </Layout>
  </Highlight>
);

export const postQuery = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        edited(formatString: "MMMM DD, YYYY")
        path
        title
        next
        id
        thumbnail {
          childImageSharp {
            ...imageFields
          }
        }
      }
    }
  }
`;

export default Template;
