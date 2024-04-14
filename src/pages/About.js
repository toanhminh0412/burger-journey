import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutSectionHeaders6 from '../components/headers/AboutSectionHeaders6';
import AboutSectionHowItWorks7 from '../components/how-it-works/AboutSectionHowItWorks7';
import AboutSectionFooters5 from '../components/footers/AboutSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutSectionHeaders6 />
      <AboutSectionHowItWorks7 />
      <AboutSectionFooters5 />
    </React.Fragment>
  );
}

