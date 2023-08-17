// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    const [cart, setCart] = useState([]);
    const handleAddTOCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    
    }
    return (
        <div className='shop-container'>
            <div className='items-container'>
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddTOCart = {handleAddTOCart}
                    ></Product>)
                }
            </div>
            <div className='orders-container'>
                <h1>Order</h1>
                <p>Total order: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;