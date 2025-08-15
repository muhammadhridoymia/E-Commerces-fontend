import React from 'react';
import OrderPlace from '../Pages/OrderPlace';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product }) => {
    const navigateor=useNavigate()
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
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <button onClick={()=> navigateor("orderplece")}>Order Now</button>
        <button onClick={()=> AddToCart(product)}>add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
