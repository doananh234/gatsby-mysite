import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Grow, Title } from './styles';

const ServiceItem = ({
 theme, icon, title, description,
}) => (
  <Wrapper themeType={theme}>
    <Grow>
      <img src={icon} alt={title} />
    </Grow>
    <Title>{title}</Title>
    <p>{description}</p>
  </Wrapper>
);

ServiceItem.propTypes = {
  theme: PropTypes.object,
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceItem;
