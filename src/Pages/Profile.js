import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Signin from './Signin';
import '../Style/UserProfile.css';

function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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

  if (!user) return <Signin />;

  const Logout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  const lastAddress = user.addresses?.[user.addresses.length - 1] || null;

  return (
    <>
      <Navbar/>
      <div className="profile-container">
        <div className="profile-title">My Profile</div>

        <div className="profile-content">

          {/* Add Photo */}
          <button className="profile-photo-btn">Add Photo</button>

          {/* User Info */}
          <div className="user-info">
            <p>Name: {user.name}</p>
            <button onClick={Logout} className="logout-btn">Log out</button>
          </div>

          {/* Address Section */}
          <div className="address-section">
            <button onClick={() => navigate("/addressform")} className="add-address-btn">Add New Address</button>
            <h3>Saved Address:</h3>
            {lastAddress ? (
              <div className="address-card">
                <p>Country: {lastAddress.country || "N/A"}</p>
                <p>City: {lastAddress.city || "N/A"}</p>
                <p>Area: {lastAddress.area || "N/A"}</p>
                <p>House: {lastAddress.home || "N/A"}</p>
                <p>Details: {lastAddress.addressDetails || "N/A"}</p>
                <p>Phone: {lastAddress.phone || "N/A"}</p>
              </div>
            ) : (
              <p>No addresses found. Add a new address.</p>
            )}
          </div>

          {/* Order History */}
          <div className="order-history">
            <button onClick={() => navigate("/orderhistory")} className="order-history-btn">All Order History</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default UserProfile;
