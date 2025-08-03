import React from 'react';
import Footer from '../Components/Footer';
const ProductDetails = ({ product }) => {
  return (
    <section style={{ padding: '20px' }}>
      <h3 style={{background:"#26b626",fontSize:"40px",borderRadius:"5px"}}>Categories</h3>
      <div>
        <p>product.name</p>
        <p>product.price</p>
      </div>
    </section>
  );
};

export default ProductDetails;
