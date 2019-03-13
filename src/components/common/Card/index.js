import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '..';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import { Wrapper, StyledCard } from './styles';

export const Card = ({
 id, link, title, image, description,
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper id={id} as="a" href={link}>
        <StyledCard theme={theme}>
          <CardHeader title={title} />
          <CardBody image={image} title={title} />
          <CardFooter description={description} />
        </StyledCard>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

Card.propTypes = {
  id: PropTypes.any,
  link: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.string,
};
