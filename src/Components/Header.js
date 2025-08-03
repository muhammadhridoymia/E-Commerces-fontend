import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigateor=useNavigate()
const [cartitem,setcartitem]=useState([])
  const cartData = JSON.parse(localStorage.getItem("cartproducts") || "[]");
  useEffect(()=>{
    setcartitem(cartData)
  },[])
  return (
    <header style={{
      position:"fixed",
      width: '100%',
      backgroundColor: '#008b00',
      padding: '10px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' ,color:"white"}}>
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

      <div style={{ display: 'flex', gap: '100px' }}>
        <button onClick={()=> navigateor("/cart")}>🛒{cartitem.length}</button>
        <button onClick={()=> navigateor("/profile")}>👤</button>
      </div>
    </header>
  );
};

const iconStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color:'white'
};

export default Header;
