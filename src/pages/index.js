import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Security from 'sections/security';
import Addons from 'sections/addons';
import MobileApp from 'sections/mobile-app';
import Dashboard from 'sections/dashboard';
import UltimateFeatures from 'sections/ultimate-features';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Parallax Engine"
          description="Stock Prediction and Analysis using A.I and data science"
        />
        <Banner />
        <Security />
        <Addons />
        <Dashboard />
        <UltimateFeatures />
        <MobileApp />

      </Layout>
    </ThemeProvider>
  );
}
