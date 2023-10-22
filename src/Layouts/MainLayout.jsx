import React from 'react';
import Heading from '../Components/Shared/Heading';
import Footer from '../Components/Shared/Footer';
import Search from '../Components/Shared/Search';
import { Outlet } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';
import Filter from '../Components/Shared/Filter';

const MainLayout = () => {
    return (
        <div className='w-4/5 mx-auto my-10'>
            <Heading></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center my-10'>
            <Search></Search>
            <Filter></Filter>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;