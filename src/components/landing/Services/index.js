import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withI18n } from 'react-i18next';
import { Container, ThemeContext } from '../../common';
import Service from './Service';
import { Wrapper, Grid } from './styles';

const ServicesUI = ({ t }) => (
  <StaticQuery
    query={graphql`
      query {
        services: allServicesYaml {
          edges {
            node {
              id
              title
              icon
              description
            }
          }
        }
      }
    `}
    render={({ services }) => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Wrapper themeType={theme}>
            <Container>
              <h2>{t('services.title')}</h2>
              <Grid>
                {services.edges.map(({ node }) => (
                  <Service themeType={theme} key={node.id} {...node} />
                ))}
              </Grid>
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )}
  />
);

ServicesUI.propTypes = {
  t: PropTypes.func,
};

export const Services = withI18n()(ServicesUI);
