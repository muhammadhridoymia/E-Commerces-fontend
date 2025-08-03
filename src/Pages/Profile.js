import React from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';




const Profile = () => {
  const navigateor=useNavigate()
  return (
    <>
    <Header/>
    <div style={{ padding: '20px',width:"800px" ,margin:"auto",backgroundColor:"#ffffff",height:"900px"}}>

      <div style={{margin:"50px",fontSize:"30px"}}>
        <p>My Profile</p>
      </div>

      <div style={{margin:"50px"}}>

        <button style={{height:"100px",width:"100px" ,borderRadius:"50%",backgroundColor:"#848a81",color:"white"}}>
          Add Photo
        </button>
        
        <div style={{marginTop:"10px"}}>
        <p>Name:Hridoy</p>
        <p>Phone:01850511158</p>
        </div>

        <div style={{marginTop:"50px"}}>
          <button style={{backgroundColor:"#008b00",color:"white"}}>Add New Address</button>
          <p>City:Dhaka</p>
          <p>Area:Mirpur 10</p>
          <p>House:Road No-12 ,Home No-123 </p>
        </div>

        <div style={{marginTop:"50px"}}>
          <button onClick={()=> navigateor("/orderhistory")}>All Order History</button>
        </div>

      </div>

    </div>
    </>
  );
};


export default Profile;
