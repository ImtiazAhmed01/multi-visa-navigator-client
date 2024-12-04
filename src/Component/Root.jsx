import React from 'react';
import { Outlet } from 'react-router-dom';


import Navbar from './Navbar/Navbar';
import Footer from './Login/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};


export default Root;