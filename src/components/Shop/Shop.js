import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts]= useState([]);
    const [cart,setcart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))  
    },[]);
    const addhandeler=(product)=>{
        console.log(product);
        const newcart=[...cart,product];
        setcart(newcart);
    }
    return (
        <div className='shop-container'>
            <div className="product-cointainer">
           {
                    products.map(product => <Product key={product.id} product={product} addhandeler={addhandeler}>

                        </Product>)
           }
            </div>
            <div className="cart-container">
             <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;