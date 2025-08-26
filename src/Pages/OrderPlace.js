import React, { useEffect, useState } from 'react';
import { CartContext } from '../Components/useContext';
import { useContext } from 'react';

function OrderPlace() {
    const { productData }=useContext(CartContext)
  const [user, setUser] = useState(null);
  const [Thumbnailphoto,setThumbnailphoto]=useState()

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

  if (!user) {
    // here will a address form later
    return <p>Please sign in to place an order</p>;
  }

  const lastAddress = user.addresses && user.addresses.length > 0
    ? user.addresses[user.addresses.length - 1]
    : null;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ width: "1500px", display: "flex", margin: "auto", gap: "20px" }}>

        {/* Left Side: Product */}
        <div style={{ width: "50%" }}>
          <div style={{ height: "1000px", width: "100%", backgroundColor: "#f4f4f4", padding: "20px" }}>
            
            {/* Main Photo */}
            <div style={{
              height: "500px",
              width: "90%",
              backgroundColor: "#aaadab",
              margin: "auto",
              borderRadius: "20px",
              textAlign: "center",
              color: "white",
              lineHeight: "500px"
            }}>
                <img
                src={Thumbnailphoto ||productData.images[0].url}
                alt='product'
                style={{ maxHeight: "100%", maxWidth:'100%',}}
                />
            </div>

            {/* Thumbnail Photos */}
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px", gap: "10px" }}>
              {productData.images.map((img,index) => (
                <div key={index} style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#aaadab",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white"
                }}>
                <img
                onClick={()=>setThumbnailphoto(img.url)}
                src={img.url}
                alt='product'
                style={{ maxHeight: "100%", maxWidth:'100%',}}
                />
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div style={{ marginTop: "20px", color: "#333" }}>
              <h2>{productData.name}</h2>
              <p>Price:{productData.price}</p>
              <p>{productData.description}</p>

              {/* Quantity */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                <button style={{ width: "40px", height: "30px", backgroundColor: "red", color: "white" }}>-</button>
                <div style={{ width: "30px", textAlign: "center" }}>0</div>
                <button style={{ width: "40px", height: "30px", backgroundColor: "#06c954", color: "white" }}>+</button>
              </div>

              {/* Color Selection */}
              <div style={{ marginTop: "20px" }}>
                <label>Choose Color:</label>
                <select style={{ width: "200px", marginLeft: "10px" }}>
                  <option>Black</option>
                  <option>White</option>
                  <option>Blue</option>
                  <option>Green</option>
                </select>
              </div>

              {/* Product Details */}
              <div style={{ marginTop: "30px" }}>
                <button>View Product Details</button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div style={{ width: "50%" }}>
          <div style={{ height: "1000px", width: "100%", backgroundColor: "#e1e6e3", padding: "20px" }}>

            {/* Last Address */}
            <div style={{ width: "90%", margin: "auto", marginBottom: "30px", padding: "20px", backgroundColor: "#aaadab", borderRadius: "10px", color: "white" }}>
              <h3>Saved Address:</h3>
              {lastAddress ? (
                <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "10px", color: "#000", backgroundColor: "#fff", borderRadius: "5px" }}>
                  <p>Country: {lastAddress.country || "N/A"}</p>
                  <p>City: {lastAddress.city || "N/A"}</p>
                  <p>Area: {lastAddress.area || "N/A"}</p>
                  <p>House: {lastAddress.home || "N/A"}</p>
                  <p>House Details: {lastAddress.addressDetails || "N/A"}</p>
                  <p>Phone: {lastAddress.phone || "N/A"}</p>
                </div>
              ) : (
                <p>No addresses found. Add a new address.</p>
              )}
            </div>

            {/* Discount Code */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
              <input style={{ flex: 1, padding: "10px" }} placeholder='Discount Code' />
              <button style={{ padding: "10px 20px" }}>Apply</button>
            </div>

            {/* Order Summary */}
            <div style={{ marginBottom: "30px" }}>
              <h2>Order Summary</h2>
              <p>Total Price:{productData.price}</p>
              <p>Total Products: 1</p>
              <p>Delivery Fee: 20$</p>
            </div>

            {/* Payment Options */}
            <div style={{ marginBottom: "30px" }}>
              <h3>Select Payment Option</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <input type="checkbox" />
                <p>Cash On Delivery</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <input type="checkbox" />
                <p>Bikash</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <input type="checkbox" />
                <p>Nogad</p>
              </div>
            </div>

            {/* Confirm Order */}
            <button style={{ width: "100%", height: "80px", backgroundColor: "#05ad59", color: "white", fontSize: "20px" }}>
              Confirm Order
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderPlace;
