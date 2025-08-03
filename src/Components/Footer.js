// src/Components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#262626',
      padding: '20px',
      textAlign: 'center',
      marginTop: '40px',
      borderTop: '1px solid #ddd',
      color:"white",
      height:"250px"
    }}>
      <p>© 2025 MyShop. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="/about" style={{ margin: '0 10px' }}>About</a>
        <a href="/contact" style={{ margin: '0 10px' }}>Contact</a>
        <a href="/terms" style={{ margin: '0 10px' }}>Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
