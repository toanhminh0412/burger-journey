import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders2 from '../components/headers/IndexSectionHeaders2';
import IndexSectionHowItWorks3 from '../components/how-it-works/IndexSectionHowItWorks3';
import IndexSectionCta4 from '../components/cta/IndexSectionCta4';
import IndexSectionFooters5 from '../components/footers/IndexSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders2 />
      <IndexSectionHowItWorks3 />
      <IndexSectionCta4 />
      <IndexSectionFooters5 />
    </React.Fragment>
  );
}

