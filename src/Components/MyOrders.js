import React, { useEffect, useState } from "react";
import "../Style/MyOrders.css"
import Navbar from "./Navbar";
export default function MyOrders() {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
   const user = JSON.parse(localStorage.getItem("user"));
const identifier = user?.identifier; 

    console.log(identifier)
    fetch(`http://localhost:5000/api/get/orders?identifier=${identifier}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-orders">
        <Navbar/>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <img
                src={order.product_img[0]?.url}
                alt={order.product_name}
                width="100"
              />
              <h3>{order.product_name}</h3>
              <p>{order.product_description}</p>
              <p><b>Price:</b> {order.totalPrice} BDT</p>
              <p><b>Payment:</b> {order.paymentMethod}</p>
              <p><b>Status:</b> {order.orderStatus}</p>
              <p><b>Date:</b> {new Date(order.orderDate).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
