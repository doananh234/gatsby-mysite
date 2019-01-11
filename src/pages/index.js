import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Layout, SEO } from '../components/common';
import {
 Intro, Skills, Work, Services, Github,
} from '../components/landing';
import theme from '../config/theme';
import i18n from '../i18n';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO title="Hello world!" type="Organization" />
        <Intro />
        <Skills />
        <Work />
        <Services />
        <Github />
      </Layout>
    </I18nextProvider>
  </ThemeProvider>
);

export default IndexPage;
