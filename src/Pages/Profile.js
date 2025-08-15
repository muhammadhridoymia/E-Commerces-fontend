import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';

function UserProfile() {
  const navigateor = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get data from localStorage when component mounts
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedData = JSON.parse(storedUser);
        if (parsedData) {
          setUser(parsedData); // ✅ get the actual user object
        }
      } catch (error) {
        console.error("Error parsing localStorage user data", error);
      }
    }
  }, []);

  if (!user) {
    return <Signin />;
  };

  const Logout=()=>{
    localStorage.removeItem("user")
  }

  return (
    <>
      <Header />
      <div
        style={{
          padding: '20px',
          width: "800px",
          margin: "auto",
          backgroundColor: "#ffffff",
          height: "900px"
        }}
      >
        <div style={{ margin: "50px", fontSize: "30px" }}>
          <p>My Profile</p>
        </div>

        <div style={{ margin: "50px" }}>
          <button
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "#848a81",
              color: "white"
            }}
          >
            Add Photo
          </button>

          <div style={{ marginTop: "10px" }}>
            <p>Name: {user.name}</p>
            <button onClick={()=> Logout()}>Log out</button>
          </div>

          <div style={{ marginTop: "50px" }}>
            <button onClick={() => navigateor("/addressform")}>Add New Address</button>
            <p>Country:{user.addresses[user.addresses.length -1].country}</p>
            <p>City:{user.addresses[user.addresses.length -1].city}</p>
            <p>Area:{user.addresses[user.addresses.length -1].area}</p>
            <p>House:{user.addresses[user.addresses.length -1].home}</p>
            <p>House Details:{user.addresses[user.addresses.length -1].addressDetails}</p>
            <p>Phone:{user.addresses[user.addresses.length -1].phone}</p>
          </div>

          <div style={{ marginTop: "50px" }}>
            <button onClick={() => navigateor("/orderhistory")}>All Order History</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
