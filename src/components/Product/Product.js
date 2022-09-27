import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,seller,price,ratings}=props.product;
    return (
        <div className='Product-container'>
            <img className='img' src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
            <p>Price:{price}$</p>
            <p>Seller:{seller}</p>
            <p> Rating: {ratings} out of 5</p>
            </div>
            <div>
                <button onClick={()=> props.addhandeler(props.product)}>Add to Cart                       <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>

                

            </div>
            

        </div>
    );
};

export default Product;