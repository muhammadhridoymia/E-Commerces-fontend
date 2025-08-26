import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();





export const CartProvider = ({ children }) => {


  const [categorieName,setcategoryName]=useState("")
  const [cartItems, setCartItems] = useState([]);
const [showAddressForm,setAddressValu]=useState(false)
const [productData,setproductData]=useState([]);
  // Load from localStorage initially
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartproducts") || "[]");
    setCartItems(savedCart);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("cartproducts", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      setCartItems,
      categorieName,
      setcategoryName,
      showAddressForm,
      setAddressValu,
      productData,
      setproductData,
      }}>
      {children}
    </CartContext.Provider>
  );
};
