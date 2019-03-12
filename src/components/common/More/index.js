import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

export const More = ({ link, color, children }) => (
  <Item href={link} target="_blank" rel="noopener noreferrer" color={color}>
    {children}
    See more
  </Item>
);
More.propTypes = {
  link: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};
