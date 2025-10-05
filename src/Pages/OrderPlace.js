import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../Components/useContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Style/OrderPlace.css'

function OrderPlace() {
  const navigate=useNavigate()
  const { productData } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const [thumbnailPhoto, setThumbnailPhoto] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedData = JSON.parse(storedUser);
        if (parsedData) setUser(parsedData);
      } catch (error) {
        console.error("Error parsing localStorage user data", error);
      }
    }
  }, []);
  useEffect(() => {
  if (!productData || Object.keys(productData).length === 0) {
    navigate("/");
  }
}, [productData, navigate]);

  if (!user) return <p className="sign-in-message">Please sign in to place an order</p>;

  const lastAddress = user.addresses?.[user.addresses.length - 1] || null;

  return (
    <>
    <Navbar/>
    <div className="order-container">
      <div className="order-wrapper">

        {/* Left Side */}
        <div className="order-left">
          <div className="product-card">
            
            {/* Main Photo */}
            <div className="main-photo">
              <img src={thumbnailPhoto || productData.images[0].url} alt="product" />
            </div>

            {/* Thumbnails */}
            <div className="thumbnail-container">
              {productData.images.map((img, index) => (
                <div key={index} className="thumbnail" onClick={() => setThumbnailPhoto(img.url)}>
                  <img src={img.url} alt="product" />
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h2>{productData.name}</h2>
              <p>Price: {productData.price}</p>
              <p>{productData.description}</p>
              <button>View Product Details</button>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="order-right">
          <div className="order-summary-card">

            {/* Last Address */}
            <div className="saved-address">
              <h3>Saved Address:</h3>
              {lastAddress ? (
                <div className="address-box">
                  <p>Country: {lastAddress.country || "N/A"}</p>
                  <p>City: {lastAddress.city || "N/A"}</p>
                  <p>Area: {lastAddress.area || "N/A"}</p>
                  <p>House: {lastAddress.home || "N/A"}</p>
                  <p>Details: {lastAddress.addressDetails || "N/A"}</p>
                  <p>Phone: {lastAddress.phone || "N/A"}</p>
                </div>
              ) : (
                <div>
                  <p>No addresses found. Add a new address.</p>
                  <button onClick={()=> navigate("/addressform")}>Add Address</button>
                </div>
              )}
            </div>

            {/* Discount */}
            <div className="discount-code">
              <input placeholder="Discount Code" />
              <button>Apply</button>
            </div>

            {/* Summary */}
            <div className="summary">
              <h2>Order Summary</h2>
              <p>Name: {productData.name}</p>
              <p>Total Price: {productData.price}</p>
              <p>Total Products: 1</p>
              <p>Delivery Fee: 20$</p>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <label>Choose Color:</label>
              <select>
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
                <option>Green</option>
              </select>
            </div>

            {/* Payment Options */}
            <div className="payment-options">
              <h3>Select Payment Option</h3>
              <label><input type="checkbox" /> Cash On Delivery</label>
              <label><input type="checkbox" /> Bikash</label>
              <label><input type="checkbox" /> Nogad</label>
            </div>

            <button className="confirm-order">Confirm Order</button>

          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default OrderPlace;
