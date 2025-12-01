import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ type }) => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* ⭐ LANDING NAVBAR */}
      {type === "landing" && (
        <div
          className="w-full py-4 px-6 flex justify-between items-center
                     bg-gradient-to-r from-yellow-600 via-orange-500 to-purple-700
                     shadow-lg"
        >
          {/* Logo */}
          <Link to={"/"} className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
            AnalyixHub
          </Link>

          {/* Purchase Button */}
          <Link
            to="/home"
            className="bg-white text-purple-700 font-bold px-6 py-3 rounded-md 
                       shadow-md hover:bg-purple-200 transition"
          >
            PURCHASE NOW
          </Link>
        </div>
      )}

      {/* ⭐ HOME NAVBAR */}
      {type === "home" && (
        <div
          className="w-full py-4 px-10 flex justify-between items-center 
                     bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800
                     text-white shadow-xl border-b border-indigo-400/40"
        >
          {/* Logo */}
          <Link to={"/home"} className="text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            AnalyixHub
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/home" className="hover:text-yellow-300 transition">
              Home
            </Link>

            <Link to="/course" className="hover:text-yellow-300 transition">
              Courses
            </Link>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About Us
            </Link>
            <Link to="/webinar" className="hover:text-yellow-300 transition">
              Webinar
            </Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact Us
            </Link>
          </div>

          {/* Login Button */}
          <Link to="/login"
            className="bg-gradient-to-r from-yellow-400 to-orange-500
                       px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            Log in / SignUp
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
