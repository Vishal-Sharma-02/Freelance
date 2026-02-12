import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import api from '../utils/axiosInstance';

const Body = () => {
  // const dispatch = useDispatch();
  // const [checkingSession, setCheckingSession] = useState(true);

  // // 👇 Prevent double execution in StrictMode
  // const hasChecked = useRef(false);

  // useEffect(() => {
  //   if (hasChecked.current) return;
  //   hasChecked.current = true;

  //   async function verifySession() {
  //     try {
  //       const res = await api.get("/profile/view");
  //       dispatch(addUser(res.data));
  //     } catch {
  //       dispatch(removeUser());
  //     } finally {
  //       setCheckingSession(false);
  //     }
  //   }

  //   verifySession();
  // }, [dispatch]);

  // if (checkingSession) {
  //   return null; // or loader
  // }

  return (
    <div>
      <Navbar type="true" />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
