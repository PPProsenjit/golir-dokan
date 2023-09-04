// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getStoreCart = getShoppingCart();
        const SaveCart = [];
        //get id from storeCart 
        for (const id in getStoreCart) {
            //match product id with product id and get product state
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                //add quantity
                const quantity = getStoreCart[id];
                addedProduct.quantity = quantity;
                //set new array add data
                SaveCart.push(addedProduct);
            }
            // push setCart in new array
            setCart(SaveCart);
        }


    }, [products])

    const handleAddTOCart = (product) => {
        let newCart = [];
        //const newCart = [...cart, product];
        const exists = cart.find(pd => pd.id === product.id)
        //set quantity 
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearToOrders = () => {
        deleteShoppingCart()
        setCart([]);

    }
    return (
        <div className='shop-container'>
            <div className='items-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddTOCart={handleAddTOCart}
                    ></Product>)
                }
            </div>
            <div className='orders-container'>
                <Cart
                    handleClearToOrders={handleClearToOrders}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;