import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Provider} from "react-redux"
import appStore from './utils/appStore.jsx';
import Body from './pages/Body';
import Home from './pages/Home';
import LogIn from './pages/auth/Login';
import ContactUs from './pages/ContactUs';
import Webinar from './pages/Webinar';
import SignUp from './pages/auth/SignUp';
// import GetWebinarLink from './pages/Webinar';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';
import RefundPolicy from './pages/legal/RefundPolicy.jsx';
import TermsCondition from './pages/legal/TermsCondition.jsx';
import LegalDocuments from './pages/legal/LegalDocuments.jsx';
import PricingPolicy from './pages/legal/PricingPolicy.jsx';
import AddCourse from './admin/AddCourse.jsx';
import CourseDetails from './pages/courseDetails.jsx';
import Learning from './pages/Learning.jsx';
import EditCourse from './pages/EditCourse.jsx';

export default function App() {
  return (
      
      <Provider store={appStore}>

      <BrowserRouter>
        <Routes>
            <Route path='/anaylixpromo' element={<LandingPage/>} />
          <Route path='/' element={<Body />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='webinar' element={<Webinar />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/course' element={<Courses/>} />
            <Route path='/course/:id' element={<CourseDetails/>} />
            <Route path='/learn/:id' element={<Learning/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/editcourse" element={<EditCourse />} />

          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/refundPolicy" element={<RefundPolicy />} />
          <Route path="/pricingPolicy" element={<PricingPolicy />} />
          <Route path="/legalDocuments" element={<LegalDocuments />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
  );
}
