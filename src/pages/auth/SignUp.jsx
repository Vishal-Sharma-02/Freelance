import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 pt-32">
      {/* 👆 ADDED pt-32 TO AVOID NAVBAR OVERLAP */}

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-purple-700">Sign Up</h1>
        <p className="text-gray-600 mt-1">
          Home <span className="text-purple-600">› Sign Up</span>
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-3xl mx-auto mt-10 bg-white p-10 rounded-xl shadow-xl border border-purple-100">
        <h2 className="text-3xl font-bold text-gray-800">
          Create Your Account
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          Welcome! Fill out the details below to get started.
        </p>

        {/* FORM START */}
        <form className="space-y-5">
          {/* PACKAGE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Select Package
            </label>
            <select className="w-full border border-gray-300 p-3 rounded-lg focus:ring-purple-300 focus:outline-none">
              <option>Select Package</option>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>

          {/* SPONSER ID + NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg focus:ring-purple-300 focus:outline-none"
              placeholder="Sponsor ID"
            />
            <input
              className="border p-3 rounded-lg focus:ring-purple-300 focus:outline-none"
              placeholder="Sponsor Name"
            />
          </div>

          {/* FULL NAME */}
          <input
            className="border p-3 rounded-lg w-full focus:ring-purple-300 focus:outline-none"
            placeholder="Full Name"
          />

          {/* EMAIL + CONFIRM EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg focus:ring-purple-300 focus:outline-none"
              placeholder="Enter Email"
            />
            <input
              className="border p-3 rounded-lg focus:ring-purple-300 focus:outline-none"
              placeholder="Confirm Email"
            />
          </div>

          {/* MOBILE */}
          <input
            className="border p-3 rounded-lg w-full focus:ring-purple-300 focus:outline-none"
            placeholder="Mobile Number"
          />

          {/* STATE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Select State
            </label>
            <select className="w-full border border-gray-300 p-3 rounded-lg focus:ring-purple-300 focus:outline-none">
              <option>Select State</option>
              <option>Delhi</option>
              <option>Uttar Pradesh</option>
              <option>Maharashtra</option>
              <option>Rajasthan</option>
            </select>
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border p-3 rounded-lg w-full focus:ring-purple-300 focus:outline-none"
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 text-xl"
            >
              👁️
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="border p-3 rounded-lg w-full focus:ring-purple-300 focus:outline-none"
              placeholder="Confirm Password"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 text-xl"
            >
              👁️
            </span>
          </div>

          {/* CHECKBOXES */}
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <p className="text-gray-700">
              Agree to Terms and Conditions{" "}
              <a href="#" className="text-purple-600 font-medium underline">
                Read
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <p className="text-gray-700">
              Agree to Refund Policy{" "}
              <a href="#" className="text-purple-600 font-medium underline">
                Read
              </a>
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full mt-4 font-semibold text-lg shadow-lg hover:bg-purple-700 transition-all">
            Sign Up →
          </button>

          {/* LOGIN LINK */}
          <p className="mt-4 text-gray-700">
            Already have an account?
            <Link className="text-purple-700 font-semibold ml-1" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
