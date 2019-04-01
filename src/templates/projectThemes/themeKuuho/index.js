import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderContainer from './Header';

const ThemeKuuho = ({ project }) => {
  console.log('project', project);
  return (
    <Layout>
      <HeaderContainer />
    </Layout>
  );
};

export default ThemeKuuho;
