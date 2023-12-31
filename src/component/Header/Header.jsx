// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import logo from '../../images/golir-dokan.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='link-header'>
            <Link to='/'>Shop</Link>
            <Link to="orders">Order Review</Link>
            <Link to="inventory">Inventory</Link>
            <Link to="about">about</Link>
            </div>
        </nav>
    );
};

export default Header;