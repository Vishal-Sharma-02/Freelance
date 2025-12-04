import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Body = () => {

  return (
    <div>
  
      <Navbar type={"true"} />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Body;