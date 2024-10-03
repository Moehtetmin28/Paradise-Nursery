// src/App.js
import React from 'react';
import './styles/App.css'; // Import the CSS file

import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Paradise Nursery</h1>
        {/* You can add a navigation bar or other elements here */}
      </header>
      {/* Render your components here */}
      <LandingPage />
      <ProductListingPage />
      <ShoppingCartPage />
      <footer className="footer">
        <p>&copy; 2024 Paradise Nursery</p>
      </footer>
    </div>
  );
};

export default App;
