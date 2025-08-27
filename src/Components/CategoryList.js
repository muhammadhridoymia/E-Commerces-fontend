import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './useContext';
import '../Style/CategoryList.css';

const CategoryList = ({ categories = [] }) => {
  const navigate = useNavigate();
  const { setcategoryName } = useContext(CartContext);

  return (
    <section className="category-section">
      <h3 className="category-title">Categories</h3>
      <div className="category-container">
        {categories.map(cat => (
          <button
            key={cat.id ?? cat.name}
            type="button"
            aria-label={`Open category ${cat.name}`}
            className="category-card"
            onClick={() => {
              setcategoryName(cat.name);
              navigate('/categoripage');
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
