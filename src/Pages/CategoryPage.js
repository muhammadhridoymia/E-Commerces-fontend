import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Components/useContext";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CategoryPage = () => {
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

        // GET with category as query param; change path if your API differs
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
      <Header />
      <div style={{ width: "1700px", margin: "auto", background: "#ffffff", padding: "30px" }}>
        <h1>{categorieName || "Category"} </h1>

        {loading && <div style={{ padding: 12 }}>Loading products...</div>}
        {error && <div style={{ color: "red", padding: 12 }}>Error: {error}</div>}

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((p) => (
            <ProductCard key={p._id || p.id || p.name} product={p} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
          <button style={{ height: "60px", width: "300px" }}> See More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;