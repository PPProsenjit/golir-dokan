import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../../App';

const Home = () => {
    return (
        <div>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;