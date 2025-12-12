import React ,{useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  async function verifySession() {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));  // refresh redux
    } catch {
      dispatch(removeUser());
    }
  }

  verifySession();
}, []);

  return (
    <div>
  
      <Navbar type={"true"} />
      <div className='pt-20'>
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Body;