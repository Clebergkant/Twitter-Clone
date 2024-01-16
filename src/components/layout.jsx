import React from 'react';
import Sidebar from './sidebar';
import Trends from './trends';
import { Outlet } from 'react-router-dom';
import Home from '../pages/home';

function Layout() {
    return (
        <>
            <Sidebar />           
            <Outlet />
            <Trends />
        </>
    );
}

export default Layout;