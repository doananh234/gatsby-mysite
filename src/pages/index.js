import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Layout, SEO } from '../components/common';
import {
 Intro, Skills, Work, Services, Github,
} from '../components/landing';
import theme from '../config/theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Hello world!" type="Organization" />
      <Intro />
      <Skills />
      <Work />
      <Services />
      <Github />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
