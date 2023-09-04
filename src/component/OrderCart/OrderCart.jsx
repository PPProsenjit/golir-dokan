import React from 'react';
import './OrderCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const OrderCart = ({ product, handelDeleteBtn }) => {

    const { id, name, img, shipping, quantity, price } = product;
    return (
        <div className='orderCart-container'>
            <img src={img} alt="" />
            <div className='orderCart-details-container'>
                <div className='orderCart-detail'>
                    <h6>{name}</h6>
                    <p><small>price: <span>${price}</span></small></p>
                    <p><small>Shipping: <span>${shipping}</span></small></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handelDeleteBtn(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faDeleteLeft}></FontAwesomeIcon>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default OrderCart;