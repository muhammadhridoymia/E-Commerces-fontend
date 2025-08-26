import React from 'react';
import { CartContext } from './useContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';

const CategoryList = ({ categories = [] }) => {

  const navigate = useNavigate();
  const { setcategoryName } = useContext(CartContext);

  return (
    <section style={{ padding: '20px' }}>
      <h3 style={{background:"#26b626",fontSize:"40px",borderRadius:"5px",color:"white"}}>Categories</h3>
      <div style={{ display: 'flex', flexWrap:"wrap",gap: '10px' }}>
        {categories.map(cat => (
          <button
            key={cat.id ?? cat.name}
            type="button"
            aria-label={`Open category ${cat.name}`}
            onClick={() => {
              setcategoryName(cat.name);
              navigate('/categoripage');
            }}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              height: '150px',
              width: '150px',
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
