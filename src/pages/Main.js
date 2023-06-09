import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Products from '../components/Products/products'; // Update the path to the Products component
import { services } from '../Services/Services';

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    // Replace 'products.products' with the correct variable or data source that contains the products
    const newProduct = services.find((elem) => elem.id === id);
    setCart([...cart, newProduct]);
    if (newProduct) {
      alert("Product added successfully");
    }
  };

  const deleteFromCart = (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (confirmed) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} deleteFromCart={deleteFromCart} />} />
        <Route path="/product/:product" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Main;
