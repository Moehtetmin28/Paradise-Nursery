// src/components/ProductListingPage.js
import React from 'react';
import '../styles/ProductListingPage.css'; // Import the CSS for ProductListingPage

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 29.99, image: 'path_to_image' },
  { id: 2, name: 'Snake Plant', price: 19.99, image: 'path_to_image' },
  // Add more products
];

const ProductListingPage = () => {
  return (
    <div className="product-listing">
      <h2>Our Houseplants</h2>
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
