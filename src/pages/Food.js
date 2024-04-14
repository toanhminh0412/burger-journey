import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FoodSectionHeaders6 from '../components/headers/FoodSectionHeaders6';
import FoodSectionTeams7 from '../components/teams/FoodSectionTeams7';
import FoodSectionFooters5 from '../components/footers/FoodSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Food() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FoodSectionHeaders6 />
      <FoodSectionTeams7 />
      <FoodSectionFooters5 />
    </React.Fragment>
  );
}

