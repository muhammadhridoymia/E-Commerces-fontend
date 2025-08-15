import React from 'react'

function OrderPlace() {
  return (
    <div>
        <div>
            <div style={{width:"1500px",display:"flex",margin:"auto"}}>

                <div style={{width:"50%"}}>
                    <div>
                        <div style={{height:"1000px",width:"100%",backgroundColor:"#f4f4f4",}}>
                            <div style={{height:"500px",width:"90%",backgroundColor:"#aaadab",margin:"auto",borderRadius:"20px",textAlign:"center",color:"white"}}>
                                Photo
                            </div>

                            <div style={{display:"flex",color:"white",}}>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>Phot-1</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>Photo-2</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>Photo-3</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>Phot-4</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>photo-5</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>photo6</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>photo-7</div>
                                <div style={{width:"70px",height:"70px",backgroundColor:"#aaadab",margin:"10px"}}>photo8</div>
                            </div>

                            <div style={{margin:"20px"}}>
                            <h1>Shows</h1>
                            <div>
                            Price:100$
                            </div>
                            <div>
                                <p>Running Sneakers for Men - Low Top Type - White Color - Casual Lace-Up Shoes for Every Season - Fashionable and Lightweight</p>
                            </div>

                            <div style={{display:"flex"}}>
                            <button style={{width:"100px",height:"20px",backgroundColor:"red",color:"white",}}>-</button>
                            <div style={{width:"20px",height:"20px",textAlign:"center",color:"white"}}>0</div>
                            <button style={{width:"100px",height:"20px",backgroundColor:"#06c954",color:"white"}}>+</button>
                            </div>

                            <div style={{marginTop:"30px"}}>Choses color</div>

                            <select style={{width:"200px"}}>
                                <option>Black</option>
                                <option>white</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                            <div style={{marginTop:"50px"}}>
                                <button> Product details..... </button>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div style={{width:"50%"}}>
                    <div>
                    <div>
                        <div style={{height:"1000px",width:"100%",backgroundColor:"#e1e6e3",}}>
                            <div style={{width:"90%",height:"200px",backgroundColor:"#aaadab",margin:"auto",textAlign:"center",color:"white",borderRadius:"10px"}}>
                                <h1>Your Saved Address</h1>
                                <p>Name:Muhammad Hridoy</p>
                                <p>Home:Road-10,House-823,Dhaka-1216</p>
                                <p>Phone:01XXXXXXXXX</p>
                                <button>Change Address</button>
                            </div>
                            <div style={{margin:"40px",height:"40px",width:"60%",backgroundColor:"#aaadab",display:"flex"}}>
                                <input style={{width:"400px",alignContent:"center"}} placeholder='Discount Code'/>
                                <button>Apply</button>
                            </div>
                            <div style={{with:"60%,",margin:"40px"}}>
                                <h1>Order Summary</h1>
                                <p>Total Price:100$</p>
                                <p>Total Products:1</p>
                                <p>Delivery Fee:20$</p>
                                <h1> Select Paymeth option</h1>
                                <div style={{display:"flex"}}>
                                   <input  type='checkbox'/>
                                   <p>Cash On delivery</p>
                                </div>
                                <div style={{display:"flex"}}>
                                   <input  type='checkbox'/>
                                   <p>Bikash</p>
                                </div>
                                <div style={{display:"flex"}}>
                                   <input  type='checkbox'/>
                                   <p>Nogad</p>
                                </div>
                                <button style={{width:"90%",height:"80px",backgroundColor:"#05ad59"}}>Confarm Order</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OrderPlace