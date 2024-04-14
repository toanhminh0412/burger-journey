import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReserveSectionHeaders6 from '../components/headers/ReserveSectionHeaders6';
import ReserveSectionContact7 from '../components/contact/ReserveSectionContact7';
import ReserveSectionFooters5 from '../components/footers/ReserveSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Reserve() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ReserveSectionHeaders6 />
      <ReserveSectionContact7 />
      <ReserveSectionFooters5 />
    </React.Fragment>
  );
}

