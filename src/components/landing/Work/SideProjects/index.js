import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Project } from '../../../common';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        sideProjects: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true }, isHighlight: { ne: false } } }
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
    render={({ sideProjects }) => <Project title="Side Projects" projects={sideProjects} side />}
  />
);
