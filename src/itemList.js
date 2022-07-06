import React from "react";

import './App.css';

import { useState, useEffect } from "react";


export const ItemLista = (props) => {
 
const [products, setProducts] = useState([]);
useEffect(()=>{
const getProducts = async () => {

try{
    const response = await fetch("https://fakestoreapi.com/products");  
const data= await response.json ();
setProducts(data)

}
catch(error){
  console.log(error);
}
 


}
getProducts();
}

,[])  


return (
<>

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

