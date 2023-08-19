// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const getCart = getShoppingCart();
        console.log(getCart);

    },[])

    const handleAddTOCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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
                <Cart
                cart ={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;