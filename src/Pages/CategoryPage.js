import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Components/useContext";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import '../Style/CategoryPage.css';

const CategoryPage = () => {
  const navigate=useNavigate()
  const { categorieName } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
     
    if (!categorieName) {
      setProducts([]);
      return;
    }
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const base = process.env.REACT_APP_API_URL || "http://localhost:5000";
        const res = await fetch(`${base}/api/get/category/${categorieName}/products`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    })();
  }, [categorieName]);


  return (
    <div>
      <div className="categorylist-container">
        <h1>{categorieName || "Category"}</h1>

        {loading && <div className="status-message">Loading products...</div>}
        {error && <div className="status-message error">Error: {error}</div>}

        <div className="products-grid">
          {products.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>

        <div className="see-more-container">
          <button className="see-more-button">See More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
