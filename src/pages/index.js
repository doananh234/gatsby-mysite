import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout, SEO } from '../components/common'
import { Intro, Skills, Work, Services, Github } from '../components/landing'
import themeConfig from '../config/theme'
import '../i18n'

const IndexPage = () => (
  <ThemeProvider theme={themeConfig}>
    <Layout>
      <SEO title="Hello world!" type="Organization" />
      <Intro />
      <Skills />
      <Services />
      <Work />
      <Github />
      <div id="fb-root" />
      <div
        dangerouslySetInnerHTML={{
          __html: `<script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v7.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>`,
        }}
      />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="236598804811289"
        theme_color="#F47D25"
      />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
