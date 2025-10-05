import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./useContext";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setproductData } = useContext(CartContext);

  const addToCart = (item) => {
    let data = JSON.parse(localStorage.getItem("cartproducts") || "[]");

    // check if product already exists
    const existingIndex = data.findIndex((p) => p._id === item._idid);
    if (existingIndex !== -1) {
      data[existingIndex].quantity += 1;
    } else {
      data.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cartproducts", JSON.stringify(data));
    alert(`${item.name} added to cart!`);
  };

  const orderNow = (item) => {
    setproductData(item);
    navigate("/orderplace");
  };

  const outOfStock = product.stock === 0 || product.isOutOfStock;

  return (
    <div className="product-card">
      <img
        src={product.images?.[0]?.url || "https://via.placeholder.com/150"}
        alt={product.name || "product"}
        className="product-image"
      />

      {outOfStock && <div className="out-of-stock">Out of Stock</div>}

      <p className="product-name">{product.name || "Unnamed Product"}</p>
      <p className="product-price">${product.price || "N/A"}</p>

      <div className="product-actions">
        <button onClick={() => orderNow(product)} disabled={outOfStock}>
          Order Now
        </button>
        <button onClick={() => addToCart(product)} disabled={outOfStock}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
