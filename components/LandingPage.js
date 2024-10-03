// src/components/LandingPage.js
import React from 'react';
import '../styles/LandingPage.css'; // Import the CSS for LandingPage

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <a href="/products" className="get-started-button">Get Started</a>
    </div>
  );
};

export default LandingPage;
