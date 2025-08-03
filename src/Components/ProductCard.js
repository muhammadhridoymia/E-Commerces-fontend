import React from 'react';

const ProductCard = ({ product }) => {
    const AddToCart=(item)=>{
        const data=JSON.parse(localStorage.getItem("cartproducts")||"[]")
        data.push(item)
        localStorage.setItem("cartproducts",JSON.stringify(data))
    }
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '8px',
      width: '300px',
      height:"350px",
      backgroundColor: '#fff',
      boxSizing: 'border-box',
    }}>
      <p style={{ fontWeight: 'bold' }}>{product.name}</p>
      <p>${product.price}</p>
      <div>
        <button>Order Now</button>
        <button onClick={()=> AddToCart(product)}>add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
