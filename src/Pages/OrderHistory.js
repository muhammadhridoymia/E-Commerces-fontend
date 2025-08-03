import React from "react";
const OrderHistory=()=>{
    return(
        <div style={{ padding: '20px',width:"800px" ,margin:"auto",backgroundColor:"#ffffff",height:"900px"}}>
            <h1>Order History</h1>

            <div style={{display:"flex"}}>

                <div style={{height:"100px",width:"200px",backgroundColor:"#6fad4e",margin:"10px"}}>
                    Product Photo
                </div>

                <div>
                    <p>Shows</p>
                    <p>100$</p>
                    <p>completed at 12/12/2025</p>
                </div>

                <div style={{height:"100px",width:"100px", margin:"auto"}}>
                    <button style={{height:"40px",width:"100px"}}>See more</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default OrderHistory