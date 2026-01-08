import React, {useState } from "react";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ type }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
 
   // ⭐ CHECK LOGIN FROM REDUX STORE (PERSISTED)
  const user = useSelector((state) => state.user);
  const isLoggedIn = Boolean(user && user._id);    

  return (
    <div className="w-full fixed top-0 left-0 z-50">

      {/* ⭐ LANDING NAVBAR */}
      {type === "false" && (
        <div className="backdrop-blur-xl bg-[#0D1125]/80 border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto  py-2 flex justify-between items-center">
            
            <Link to="/anaylixpromo" onClick={() => setMobileOpen(false)}>
              <img src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1765559052/logo2_fjpbok.png" alt="logo" className="h-16 md:h-20 lg:h-20 w-auto drop-shadow-xl" />
            </Link>

            {/* Desktop: Show Purchase OR Profile */}
            <div className="hidden md:block">
             
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-purple-500 to-cyan-400
                           text-white font-semibold px-7 py-3 rounded-full 
                           shadow-lg hover:scale-105 transition"
                >
                  PURCHASE NOW
                </Link>
        
            </div>

            <button
              className="md:hidden text-white text-3xl pr-5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>

          {/* ⭐ MOBILE MENU */}
          {mobileOpen && (
            <div className="md:hidden bg-[#0D1125]/95 text-white px-6 py-6 space-y-6 shadow-lg">

              <nav className="flex flex-col space-y-4 text-lg font-medium">
                <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Home</Link>
                <Link to="/course" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Courses</Link>
                <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">About Us</Link>
                <Link to="/webinar" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Webinar</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Contact Us</Link>
              </nav>

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-purple-500 to-cyan-400
                            text-white font-semibold px-7 py-3 rounded-full shadow-lg mt-4"
                >
                  Log in / SignUp
                </Link>
              ) : (
                <Link
                  to="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center text-white font-semibold px-7 py-3 rounded-full mt-4 bg-green-600 shadow-lg"
                >
                  My Profile
                </Link>
              )}
            </div>
          )}
        </div>
      )}

      {/* ⭐ HOME NAVBAR */}
      {type === "true" && (
        <div className="backdrop-blur-xl bg-[#0B1320]/80 border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto pr-4 md:pr-0 py-2 flex justify-between items-center">

            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1765559052/logo2_fjpbok.png" alt="logo" className="h-16 md:h-20 lg:h-20 w-auto drop-shadow-xl" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-base font-medium text-white">
              <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
              <Link to="/course" className="hover:text-cyan-300 transition">Courses</Link>
              <Link to="/about" className="hover:text-cyan-300 transition">About Us</Link>
              <Link to="/webinar" className="hover:text-cyan-300 transition">Webinar</Link>
              <Link to="/contact" className="hover:text-cyan-300 transition">Contact Us</Link>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-purple-500 to-cyan-400
                           px-6 py-2 rounded-full font-semibold text-white 
                           shadow-lg hover:scale-105 transition"
                >
                  Log in / SignUp
                </Link>
              ) : (
                <Link
                  to="/profile"
                  className="text-white font-semibold hover:text-cyan-300 transition"
                >
                  My Profile
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>

          {/* ⭐ MOBILE MENU */}
          {mobileOpen && (
            <div className="md:hidden bg-[#0B1320]/95 text-white px-6 py-6 space-y-6 shadow-lg">

              <nav className="flex flex-col space-y-4 text-lg font-medium">
                <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Home</Link>
                <Link to="/course" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Courses</Link>
                <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">About Us</Link>
                <Link to="/webinar" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Webinar</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-cyan-300 transition">Contact Us</Link>
              </nav>

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-purple-500 to-cyan-400
                            text-white font-semibold px-7 py-3 rounded-full shadow-lg mt-4"
                >
                  Log in / SignUp
                </Link>
              ) : (
                <Link
                  to="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center text-white font-semibold px-7 py-3 rounded-full mt-4 bg-green-600 shadow-lg"
                >
                  My Profile
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
