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
  const [paymentOption,setPaymentOption]=useState()
  const [selectedColor,setSelectedColor]=useState()
  const [loading,setLoading]=useState(false)

  const Total_price=productData.price+20
  


  const sendData = async () => {
  if (!paymentOption) {
    alert("Please select a payment method");
    return;
  }

  if (!lastAddress) {
    alert("Please add an address before confirming");
    return;
  }

  const orderData = {
    identifier:user.identifier,
    product_id:productData._id,
    product_name: productData.name,
    product_description:productData.description,
    product_img:productData.images,
    product_price:productData.price,
    product_category:productData.category,
    product_subcategory:productData.subcategory,
    product_brand:productData.brand,
    address: lastAddress,
    color: selectedColor,
    paymentMethod: paymentOption,
    deliveryFee: 20,
    totalPrice: Total_price,
  };
  console.log(orderData)

  try {
    setLoading(true)
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();
    if (response.ok) {
      setLoading(false)
      alert("✅ Order placed successfully!");
      navigate("/order-success");
    } else {
      setLoading(false)
      alert("❌ Failed to place order: " + result.message);
    }
  } catch (error) {
    setLoading(false)
    console.error("Error sending order:", error);
    alert("Something went wrong. Please try again.");
  }
};



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
              <p>Price: {productData.price}</p>
              <p>Total Products: 1</p>
              <p>Delivery Fee: 20$</p>
              <p>Total Price:{Total_price}</p>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <label>Choose Color:</label>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
                <option>Green</option>
              </select>
            </div>

            {/* Payment Options */}
            <div className="payment-options">
  <h3>Select Payment Option</h3>

  <label>
    <input
      type="radio"
      name="payment"
      value="Cash On Delivery"
      onChange={(e) => setPaymentOption(e.target.value)}
    />
    Cash On Delivery
  </label>

  <label>
    <input
      type="radio"
      name="payment"
      value="Bikash"
      onChange={(e) => setPaymentOption(e.target.value)}
    />
    Bikash
  </label>

  <label>
    <input
      type="radio"
      name="payment"
      value="Nogad"
      onChange={(e) => setPaymentOption(e.target.value)}
    />
    Nogad
  </label>
</div>


            <button className="confirm-order" onClick={sendData}
            >{loading?<div className='loading'></div>:"Confirm Order"}</button>

          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default OrderPlace;
