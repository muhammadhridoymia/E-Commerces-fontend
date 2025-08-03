import React from 'react';
import { CartContext } from './useContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



const CategoryList = ({ categories }) => {

const navigateor=useNavigate()
  const {setcategoryName}=useContext(CartContext)


  return (
    <section style={{ padding: '20px' }}>
      <h3 style={{background:"#26b626",fontSize:"40px",borderRadius:"5px",color:"white"}}>Categories</h3>
      <div style={{ display: 'flex', flexWrap:"wrap",gap: '10px' }}>
        {categories.map(cat => (
            <button 
                 onClick={()=>{
                  setcategoryName(cat.name)
                  navigateor("/categoripage")
                 }}
                 key={cat.id} 
                 style={{ 
                 border: '1px solid #ccc',
                 padding: '10px' ,
                 height:"150px",
                 width:"150px"
                 }}> 
                 {cat.name}
              </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
