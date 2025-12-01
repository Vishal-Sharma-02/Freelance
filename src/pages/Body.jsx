import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Body = () => {
 const { pathname } = useLocation();

 // Decide navbar type based on route
 const getNavbarType = () => {
   if (pathname === "/") return "landing"; // Landing page
   return "home"; // All other pages
 };

  return (
    <div>
  
      <Navbar type={getNavbarType()} />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Body;