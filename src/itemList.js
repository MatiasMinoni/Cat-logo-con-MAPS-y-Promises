
import './App.css';
import React from "react";

import { FcDoughnutChart } from "react-icons/fc";


import { useState, useEffect } from "react";


export const ItemLista = (props) => {
 
const [products, setProducts] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(()=>{
const getProducts = async () => {

try{
    const response = await fetch("https://fakestoreapi.com/products");  
const data= await response.json ();
setProducts(data)

}
catch(err){
  console.err(err);
  setError(true)

}
 finally{
  setLoading(false)
}


}
getProducts();
},[]);  


return (
<>
{loading ? <img src="https://img.icons8.com/color/48/000000/installing-updates--v2.png"/>: null}
{error ? <p>Error</p> : null}

{products.map((product) =>
  <div class="row">
  <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src={product.image}  alt=""/>
        <span class="card-title">{product.title}</span>
      </div>
      <div class="card-content">
        <p>Precio: {product.price}</p>
        <p>{product.description}</p>
      </div>
      <div class="card-action">
        <a href="#">Ver más</a>
      </div>
    </div>
  </div>
</div>
)}



</>
)}

