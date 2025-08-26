import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './useContext';

const ProductCard = ({ product }) => {
  const navigateor = useNavigate();
  const { setproductData } = useContext(CartContext);

  const AddToCart = (item) => {
    const data = JSON.parse(localStorage.getItem("cartproducts") || "[]");
    data.push(item);
    localStorage.setItem("cartproducts", JSON.stringify(data));
  };

  const OrderNow = (item) => {
    setproductData(item);
    navigateor("/orderplace");
  };

  const outOfStock = product.stock === 0 || product.isOutOfStock;

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '8px',
      width: '300px',
      height:"350px",
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <img
        src={product.images[0]?.url}
        alt={product.name || "product"}
        style={{ width: '100%', height:'200px', objectFit:'cover', borderRadius:'8px'}}
      />
      {outOfStock && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'crimson',
          color: 'white',
          padding: '5px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          Out of Stock
        </div>
      )}
      <p style={{ fontWeight: 'bold' }}>{product.name}</p>
      <p>${product.price}</p>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <button onClick={() => OrderNow(product)} disabled={outOfStock}>
          Order Now
        </button>
        <button onClick={() => AddToCart(product)} disabled={outOfStock}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
