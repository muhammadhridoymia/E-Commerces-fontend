// import React, { useState, useEffect } from 'react';
// import Header from '../Components/Header';
// import { useNavigate } from 'react-router-dom';
// import Signin from './Signin';

// function UserProfile() {
//   const navigateor = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Get data from localStorage when component mounts
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       try {
//         const parsedData = JSON.parse(storedUser);
//         if (parsedData) {
//           setUser(parsedData); // ✅ get the actual user object
//         }
//       } catch (error) {
//         console.error("Error parsing localStorage user data", error);
//       }
//     }
//   }, []);

//   if (!user) {
//     return <Signin />;
//   };

//   const Logout=()=>{
//     localStorage.removeItem("user")
//   }

//   return (
//     <>
//       <Header />
//       <div
//         style={{
//           padding: '20px',
//           width: "800px",
//           margin: "auto",
//           backgroundColor: "#ffffff",
//           height: "900px"
//         }}
//       >
//         <div style={{ margin: "50px", fontSize: "30px" }}>
//           <p>My Profile</p>
//         </div>

//         <div style={{ margin: "50px" }}>
//           <button
//             style={{
//               height: "100px",
//               width: "100px",
//               borderRadius: "50%",
//               backgroundColor: "#848a81",
//               color: "white"
//             }}
//           >
//             Add Photo
//           </button>

//           <div style={{ marginTop: "10px" }}>
//             <p>Name: {user.name}</p>
//             <button onClick={()=> Logout()}>Log out</button>
//           </div>

//           <div style={{ marginTop: "50px" }}>
//             <button onClick={() => navigateor("/addressform")}>Add New Address</button>
//             <p>Country:{user.addresses[user.addresses.length -1].country}</p>
//             <p>City:{user.addresses[user.addresses.length -1].city ||"no address"}</p>
//             <p>Area:{user.addresses[user.addresses.length -1].area ||"no address"}</p>
//             <p>House:{user.addresses[user.addresses.length -1].home ||"no address"}</p>
//             <p>House Details:{user.addresses[user.addresses.length -1].addressDetails ||"no address"}</p>
//             <p>Phone:{user.addresses[user.addresses.length -1].phone ||"no address"}</p>
//           </div>

//           <div style={{ marginTop: "50px" }}>
//             <button onClick={() => navigateor("/orderhistory")}>All Order History</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserProfile;



import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';

function UserProfile() {
  const navigateor = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
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

  // If no user, redirect to Signin
  if (!user) return <Signin />;

  // Logout function
  const Logout = () => {
    localStorage.removeItem("user");
    navigateor("/signin");
  };


  // Get the last address safely
const lastAddress = user.addresses && user.addresses.length > 0 
? user.addresses[user.addresses.length - 1] 
: null;


  return (
    <>
      <Header />
      <div style={{ padding: '20px', width: "800px", margin: "auto", backgroundColor: "#ffffff", minHeight: "900px" }}>
        <div style={{ margin: "50px", fontSize: "30px" }}>
          <p>My Profile</p>
        </div>

        <div style={{ margin: "50px" }}>
          {/* Add Photo Button */}
          <button style={{ height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#848a81", color: "white" }}>
            Add Photo
          </button>

          {/* User Name and Logout */}
          <div style={{ marginTop: "10px" }}>
            <p>Name: {user.name}</p>
            <button onClick={Logout}>Log out</button>
          </div>

          {/*Latest Addresses */}
          <div style={{ marginTop: "50px" }}>
  <button onClick={() => navigateor("/addressform")}>Add New Address</button>
  <h3>Saved Address:</h3>
  {lastAddress ? (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
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


          {/* Order History */}
          <div style={{ marginTop: "50px" }}>
            <button onClick={() => navigateor("/orderhistory")}>All Order History</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

