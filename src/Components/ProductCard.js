import React, { useContext ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./useContext";
import "../Style/ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setproductData } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  

  const addToCart = (item) => {
    setLoading(true);
    const identifier= localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).identifier : null;
    const product_id= item._id;
    
     fetch(`http://localhost:5000/api/add/to/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, product_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        alert("Product added to cart");
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error adding to cart:", err);
        alert("Failed to add product to cart");
      });
  }



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
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
