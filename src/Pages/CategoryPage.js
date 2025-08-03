import React from "react";
import { CartContext } from "../Components/useContext";
import { useContext } from "react";
import { products } from "../Data/Products";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CategoryPage=()=>{
    const {categorieName}=useContext(CartContext)
    return(
        <div>
            <Header/>
            <div style={{width:"1700px",margin:"auto",background:"#ffffff",padding:"30px"}}>
                <h1>{categorieName }</h1>

                <div style={{display:"flex",gap:"10px",flexWrap:"wrap",justifyContent:"center"}}>
                    {products.map(p =>
                    <ProductCard product={p}/>
                    )}
                </div>


                <div  style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
                    <button style={{height:"60px",width:"300px"}}> See More</button>
                </div>
                

            </div>
            <Footer/>

        </div>
    )
}
export default CategoryPage