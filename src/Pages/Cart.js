import React from 'react';
import { CartContext } from '../Components/useContext';
import { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';
const Cart = () => {
  const [checkbox,setcheckbox]=useState([])
  
  const Totalprice=checkbox.reduce((total,item)=> total+item.price,0)
  const {cartItems,setCartItems}=useContext(CartContext)

  const remove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <>
    <Header/>
    <div style={{ padding: '20px',width:"1300px",margin:"auto" ,backgroundColor:"#ffffff"}}>
      <div style={{margin:"50px"}}>
      <h2>My Cart</h2>
      </div>
      <div style={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
        {cartItems.length === 0 ? (
        <p>Your cart is empty.Add some</p>
          ) : (
          cartItems.map((item, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            width: '300px',
            height: "350px",
            backgroundColor: '#ffffff;',
            boxSizing: 'border-box',
            marginBottom: '20px',

          }}>
            <p style={{ fontWeight: 'bold' }}>{item.name}</p>
            <p>${item.price}</p>
            <p>id:{item.id}</p>
            <button onClick={()=> remove(index)}>Remove</button>
            <button>Buy Now</button>

            <input
             type='checkbox'
               onChange={(e) => {
               if (e.target.checked) {
               setcheckbox(prev => [...prev, item]);
               } else {
               setcheckbox(prev => prev.filter(p => p !== item));
                  }
              }}
              />

          </div>
        ))
      )}
      </div>

      <div 
          style={{
           background: "#129fdb",
           width: "1300px",
           display: "flex",              // 👈 make it a flex container
           flexDirection: "column",      // 👈 stack children vertically
           alignItems: "center",         // 👈 center horizontally
           justifyContent: "center",     // 👈 center vertically (if div has height)
           padding: "20px",              // 👈 optional spacing
           margin: "auto",               // 👈 center whole box in page
           borderRadius: "8px"           // 👈 just for nicer design
           }}>
           <h1 style={{ color: "#fff" }}>Select Products</h1>
           <p style={{ color: "#fff" }}>Total Item: {checkbox.length}</p>
           <p style={{ color: "#fff" }}>Total Price: ${Totalprice}</p>
          <button style={{ padding: "10px 20px", marginTop: "10px" }}>Order Now</button>
      </div>


    </div>
    <Footer/>
    </>
  );
};

export default Cart;

