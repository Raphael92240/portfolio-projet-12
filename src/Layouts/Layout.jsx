import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/Layouts/Header/Header.jsx';
import Footer from '@/Layouts/Footer/Footer.jsx'

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;