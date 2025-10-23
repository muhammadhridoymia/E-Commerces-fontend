import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from './useContext';
import '../Style/Navbar.css';

const Navbar = () => {
  const { cartItems} = useContext(CartContext);
  const navigateor = useNavigate();
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
          🛒 <span className="badge">{cartItems.length || 0}</span>
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
