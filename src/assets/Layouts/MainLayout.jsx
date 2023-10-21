import React from 'react';
import Heading from '../Components/Shared/Heading';
import Footer from '../Components/Shared/Footer';
import Search from '../Components/Shared/Search';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Heading></Heading>
            <Search></Search>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;