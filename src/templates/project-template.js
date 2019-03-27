import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/common/Layout';
import Post from '../components/common/Post';
import Theme1 from './projectThemes/theme1';

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const { title: postTitle, description: postDescription } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Theme1 post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        screenShort
        title
      }
    }
  }
`;

export default PostTemplate;
