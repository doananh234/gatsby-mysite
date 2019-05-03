import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import {
 Layout, Container, SEO, PageTitle, CardPost,
} from '../components/common';

const Project = () => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 20
        ) {
          edges {
            node {
              excerpt(pruneLength: 230)
              fields {
                slug
              }
              frontmatter {
                name
                title
                description
                date(formatString: "MMM DD, YYYY")
                thumbnail
                screenShort
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <SEO title="Project" type="Organization" location="/roject" />
          <PageTitle>Articles</PageTitle>
          <Row>
            {data.allMarkdownRemark.edges.map(post => (
              <CardPost key={post.node.fields.slug} {...post} />
            ))}
          </Row>
        </Container>
      </Layout>
    )}
  />
);

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &:after {
    content: '';
    max-width: 32%;
    width: 100%;

    @media (max-width: 960px) {
      content: unset;
    }
  }
`;

export default Project;
