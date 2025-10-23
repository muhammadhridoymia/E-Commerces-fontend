import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [categoryName, setCategoryName] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showAddressForm, setAddressValue] = useState(false);
  const [productData, setProductData] = useState([]);

  // Fetch cart data
  const CartDataFromBackend = async () => {
    try {
      const identifier = JSON.parse(localStorage.getItem('user'))?.identifier || null;
      const res = await fetch(`http://localhost:5000/api/get/cart/${identifier}`);
      const data = await res.json();
      setCartItems(data.products || []);
    } catch (err) {
      console.error('Error fetching cart items:', err);
      setCartItems([]);
    }
  };

  // Fetch cart data when provider mounts
  useEffect(() => {
    CartDataFromBackend();
  }, []);

  return (
    <CartContext.Provider
      value={{
        CartDataFromBackend,
        cartItems,
        setCartItems,
        categoryName,
        setCategoryName,
        showAddressForm,
        setAddressValue,
        productData,
        setProductData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
