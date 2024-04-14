import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import FoodPage from './pages/Food.js';
import DrinksPage from './pages/Drinks.js';
import AboutPage from './pages/About.js';
import ReviewsPage from './pages/Reviews.js';
import ReservePage from './pages/Reserve.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/food" element={<FoodPage />} />
         
      <Route path="/drinks" element={<DrinksPage />} />
         
      <Route path="/about" element={<AboutPage />} />
         
      <Route path="/reviews" element={<ReviewsPage />} />
         
      <Route path="/reserve" element={<ReservePage />} />
    </Routes>
  );
}

export default App;
