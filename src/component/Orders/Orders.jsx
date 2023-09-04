import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderCart from '../OrderCart/OrderCart';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const { initialCart } = useLoaderData()

    const [cart, setCart] = useState(initialCart)

    const handelDeleteBtn = (id) =>{
        const newCart = cart.filter( cart => cart.id !== id)
        setCart(newCart);
        removeFromDb(id);
    }
    const handleClearToOrders = () => {
        deleteShoppingCart()
        setCart([]);

    }
    return (
        <div >

            <div className='shop-container'>
                <div className='orders-container'>
                    {
                        cart.map(product => <OrderCart
                        key={product.id}
                        product = {product}
                        handelDeleteBtn = {handelDeleteBtn}
                        ></OrderCart>)
                    }
                </div>

                <div className='cart-container'>
                    <Cart 
                    cart={cart}
                    handleClearToOrders = {handleClearToOrders}
                    ></Cart>
                </div>
            </div>

        </div>
    );
};

export default Orders;