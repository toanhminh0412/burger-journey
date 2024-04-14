import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReviewsSectionHeaders6 from '../components/headers/ReviewsSectionHeaders6';
import ReviewsSectionTestimonials7 from '../components/testimonials/ReviewsSectionTestimonials7';
import ReviewsSectionFooters5 from '../components/footers/ReviewsSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Reviews() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ReviewsSectionHeaders6 />
      <ReviewsSectionTestimonials7 />
      <ReviewsSectionFooters5 />
    </React.Fragment>
  );
}

