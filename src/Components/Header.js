import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigateor = useNavigate();
  const [cartitem, setcartitem] = useState([]);
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
    <header style={{
      position: "fixed",
      width: '100%',
      backgroundColor: '#008b00',
      padding: '10px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px', color: "white" }}>
        MyShop
      </div>

      <input
        type="text"
        placeholder="Search products..."
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
          outline: 'none'
        }}
      />

      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => navigateor("/cart")} style={iconStyle}>
          🛒 {cartitem.length}
        </button>
        <button onClick={() => navigateor("/profile")} style={iconStyle}>
          👤
        </button>
        {!user && (
          <button onClick={() => navigateor("/signin")} style={iconStyle}> 
            Signin
          </button>
        )}
      </div>
    </header>
  );
};

const iconStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: 'white'
};

export default Header;

