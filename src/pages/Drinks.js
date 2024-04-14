import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DrinksSectionHeaders6 from '../components/headers/DrinksSectionHeaders6';
import DrinksSectionTeams7 from '../components/teams/DrinksSectionTeams7';
import DrinksSectionFooters5 from '../components/footers/DrinksSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Drinks() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <DrinksSectionHeaders6 />
      <DrinksSectionTeams7 />
      <DrinksSectionFooters5 />
    </React.Fragment>
  );
}

