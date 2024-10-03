// src/components/ShoppingCartPage.js
import React from 'react';
import '../styles/ShoppingCartPage.css'; // Import the CSS for ShoppingCartPage

const ShoppingCartPage = () => {
  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {/* Add logic to display cart items */}
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCartPage;
