import React from 'react';
import { withI18n } from 'react-i18next';
import { StaticQuery, graphql } from 'gatsby';
import {
 Layout, Container, SEO, PageTitle, Project,
} from '../components/common';

const ProjectPage = withI18n()(({ t }) => (
  <StaticQuery
    query={graphql`
      query {
        sideProjects: allMarkdownRemark(
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
                logo
                description
                category {
                  id
                  frontmatter {
                    icon
                  }
                }
                date(formatString: "MMM DD, YYYY")
                thumbnail
                screenShort
              }
            }
          }
        }
      }
    `}
    render={({ sideProjects }) => (
      <Layout>
        <Container>
          <SEO title="Project" type="Organization" location="/roject" />
          <PageTitle>{t('work.sideProjects')}</PageTitle>
          <Project projects={sideProjects} side />
        </Container>
      </Layout>
    )}
  />
));

export default ProjectPage;
