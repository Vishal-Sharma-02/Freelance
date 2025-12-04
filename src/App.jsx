import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Body from './pages/Body';
import Home from './pages/Home';
import LogIn from './pages/auth/Login';
import ContactUs from './pages/ContactUs';
import Webinar from './pages/Webinar';
import SignUp from './pages/auth/SignUp';
import GetWebinarLink from './pages/Webinar';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';


export default function App() {
  return (
      <GetWebinarLink />,
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/anaylixpromo' element={<LandingPage/>} />
          <Route path='/' element={<Body />}>
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='webinar' element={<Webinar />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/course' element={<Courses/>} />
            <Route path='/about' element={<AboutUs/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}
