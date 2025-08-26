import React, { useEffect, useState } from 'react';
import AdBanner from '../Components/Adcomponent';
import CategoryList from '../Components/CategoryList';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import { categories } from '../Data/Categroy';
import Footer from '../Components/Footer';
import '../App.css';

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
    <Header/>
    <div className='container'>
      <AdBanner />
      <CategoryList categories={categories} />
      {loading && <div style={{ padding: 20 }}>Loading products...</div>}
      {error && <div style={{ padding: 20, color: 'red' }}>Error: {error}</div>}

      <section style={{ padding: '20px' }}>
        <h3>Most Popular</h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          }}>
          {products.map(p => (
            <ProductCard key={p._id || p.id || p.name} product={p} />
          ))}
        </div>

        <div  style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
         <button style={{height:"60px",width:"300px"}}> See More</button>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Home;