
import React, { useState, useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { CartContext } from '../Components/useContext';

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((p) => p !== item));
    }
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h2 style={styles.heading}>My Cart</h2>

        <div style={styles.cartGrid}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty. Add some products.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} style={styles.card}>
                <p style={styles.productName}>{item.name}</p>
                <p>${item.price}</p>
                <p>ID: {item.id}</p>
                <button onClick={() => removeItem(index)} style={styles.button}>
                  Remove
                </button>
                <button style={styles.button}>Buy Now</button>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={styles.summaryBox}>
          <h1 style={styles.summaryTitle}>Select Products</h1>
          <p>Total Items: {selectedItems.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <button style={styles.orderButton}>Order Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

// 🧾 Style object (you can later move this to external CSS)
const styles = {
  container: {
    padding: '20px',
    width: '1300px',
    margin: 'auto',
    backgroundColor: '#ffffff',
  },
  heading: {
    margin: '50px 0',
  },
  cartGrid: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    width: '300px',
    height: '350px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    marginBottom: '20px',
  },
  productName: {
    fontWeight: 'bold',
  },
  button: {
    marginRight: '10px',
    marginTop: '10px',
  },
  summaryBox: {
    background: '#129fdb',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: 'auto',
    borderRadius: '8px',
    color: '#fff',
  },
  summaryTitle: {
    color: '#fff',
    marginBottom: '10px',
  },
  orderButton: {
    padding: '10px 20px',
    marginTop: '10px',
    backgroundColor: '#fff',
    color: '#129fdb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Cart;
