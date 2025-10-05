import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar = () => {
  const navigateor = useNavigate();
  const [cartitem ,setcartitem] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedData = JSON.parse(storedUser);
        if (parsedData) {
          setUser(parsedData);
        }
      } catch (error) {
        console.error("Error parsing localStorage user data", error);
      }
    }
  }, []);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartproducts") || "[]");
    setcartitem(cartData);
  }, []);

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigateor("/")}>
        MyShop
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
      />
        <button onClick={() => navigateor("/cart")} className="icon-btn">
          🛒 <span className="badge">{cartitem.length}</span>
        </button>
        <button onClick={() => navigateor("/profile")} className="icon-btn">
          👤
        </button>
        {!user && (
          <button onClick={() => navigateor("/signin")} className="signin-btn"> 
            Sign In
          </button>
        )}
    </header>
  );
};

export default Navbar;
