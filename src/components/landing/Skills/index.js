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
        skills: allSkillsYaml {
          edges {
            node {
              id
              title
              icon
            }
          }
        }
      }
    `}
    render={({ skills }) => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Wrapper themeType={theme}>
            <Container>
              <h2>{t('skills.title')}</h2>
              <Flex>
                {skills.edges.map(({ node }) => (
                  <Skill key={node.id} {...node} />
                ))}
              </Flex>
              <Tech themeType={theme}>
                <Link to="/the-tech-tools-I-use">{t('skills.readMore')}</Link>
              </Tech>
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )}
  />
));
