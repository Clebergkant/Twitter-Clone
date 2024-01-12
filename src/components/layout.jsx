import React from 'react';
import Sidebar from './sidebar';
import Home from '../pages/home';
import Trends from './trends';

function Layout() {
    return (
        <>

            <Sidebar />           
            <Home />
            <Trends />
            
        </>
    );
}

export default Layout;