import React, { useEffect, useState } from 'react';
import AdBanner from '../Components/Adcomponent';
import CategoryList from '../Components/CategoryList';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { categories } from '../Data/Categroy';
import '../Style/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const base = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const res = await fetch(`${base}/api/get/products`);
        if (!res.ok) throw new Error(`Products fetch failed: ${res.status}`);
        const prodData = await res.json();
        setProducts(Array.isArray(prodData) ? prodData : []);
      } catch (err) {
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="home-container">
        <AdBanner />
        <CategoryList categories={categories} />

        {loading && <div className="status-message">Loading products...</div>}
        {error && <div className="status-message error">Error: {error}</div>}

        <section className="products-section">
          <h3>Most Popular</h3>
          <div className="products-grid">
            {products.map(p => (
              <ProductCard key={p._id || p.id || p.name} product={p} />
            ))}
          </div>

          <div className="see-more-container">
            <button className="see-more-button">See More</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
