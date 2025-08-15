
import React from 'react';
import AdBanner from '../Components/Adcomponent';
import CategoryList from '../Components/CategoryList';
import ProductCard from '../Components/ProductCard';
import { products } from '../Data/Products';
import { categories } from '../Data/Categroy';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';


const Home = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <AdBanner />
      <CategoryList categories={categories} />

      <section style={{ padding: '20px' }}>
        <h3>Most Popular</h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          }}>
          {products.map(p => (
            <ProductCard  product={p} />
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