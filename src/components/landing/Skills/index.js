import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { withI18n } from 'react-i18next';
import { Container, ThemeContext } from '../../common';
import Skill from './Skill';
import { Wrapper, Tech, Flex } from './styles';

export const Skills = withI18n()(({ t }) => (
  <StaticQuery
    query={graphql`
      query {
          skills: allContentYaml {
            edges {
              node {
                title
                intro
                items {
                  description
                  icon
                  title
                }
              }
            }
          }
      }
    `}
    render={({ skills }) => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Wrapper theme={theme}>
            <Container>
              <h2>{t('skills.title')}</h2>
              <Flex>
                {skills.edges[0].node.items.map((node) => (
                  <Skill key={node.title} {...node} />
                ))}
              </Flex>
              <Tech theme={theme}>
                <Link to="/the-tech-tools-I-use">{t('skills.readMore')}</Link>
              </Tech>
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )}
  />
));
