
import React, { useState, useContext,useEffect} from 'react';
import Navbar from '../Components/Navbar';
import { CartContext } from '../Components/useContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

   const navigate=useNavigate()
   const {setproductData,cartItems,CartDataFromBackend}=useContext(CartContext)
   const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
      CartDataFromBackend()
    }, []);

   const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);

  

   const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((p) => p !== item));
    }
    };

    const orderNow = (item) => {
    setproductData(item);
    navigate("/orderplace");
    };


   return (
    <>
      <Navbar/>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Cart</h2>

        <div style={styles.cartGrid}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty. Add some products.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} style={styles.card}>
                <img
                src={item.images[0].url}
                alt={item.name || "product"}
                style={{ width: '100%', height: 'auto', objectFit: 'cover'}}
                />
                <p style={styles.productName}>{item.name}</p>
                <p>${item.price}</p>
                <p>ID: {item.id}</p>
                <button  style={styles.button}>
                  Remove
                </button>
                <button style={styles.button} onClick={()=> orderNow(item) }>Buy Now</button>
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
    height: 'auto',
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