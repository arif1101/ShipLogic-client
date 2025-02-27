import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='max-w-[1200px] min-h-[calc(100vh-70px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

        
    );
};

export default MainLayout;