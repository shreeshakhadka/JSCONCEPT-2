import { useState } from 'react'

import './App.css'

function App() {
  const products = [
    { name: 'Pants', price: 25, quantity: 17 },
    { name: 'Tops', price: 17, quantity: 8 },
    { name: 'Dress', price: 38, quantity: 12 }
  ];

  function calculateTotalPrice(product){
    return product.price * product.quantity;
  }

  function printProductInfo(product) {
    console.log('Product Name:', product.name);
    console.log('Product Quantity:', product.quantity);
    console.log('Total Price:', calculateTotalPrice(product));
    
  }
  printProductInfo(products[1])
  
  return (
    <div>
      <h1>Product Details</h1>
      {products.map((product, index) => (
        <div key={index} className ="product-container">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total Price: ${calculateTotalPrice(product)}</p>
        </div>
      ))}
    </div>
  )

  
}

export default App
