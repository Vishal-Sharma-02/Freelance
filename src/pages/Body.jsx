import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Body = () => {

  return (
    <div>
  
      <Navbar type={"true"} />
      <div className='pt-24'>


      <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Body;