import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const status = true; // demo
    setEmail("");
    setPassword("");

    if (status) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-100 to-purple-50 flex flex-col items-center pt-32">
      {/* 👆 FIX: pt-32 pushes page under the navbar */}

      {/* Top Heading */}
      <div className="w-full max-w-5xl px-6">
        <h1 className="text-4xl font-bold text-gray-800">Login</h1>
        <p className="text-gray-500 mt-2">Home &gt; Login</p>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-5xl mt-12 px-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Hey! Welcome Back
        </h2>
        <p className="text-gray-600 mt-2">Login to your Account to Continue</p>

        {/* Form Box */}
        <form className="mt-8 max-w-md">
          {/* Email */}
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email / Id.
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Mail/Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />

          {/* Password */}
          <label htmlFor="password" className="block font-medium text-gray-800">
            Password
          </label>

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            {/* Show / Hide Button */}
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3 text-sm text-blue-700 underline"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot Password */}
          <p className="text-blue-600 text-sm mt-2 cursor-pointer">
            Forgot Password?
          </p>

          {/* Sign In Button */}
          <button
            onClick={handleClick}
            className="mt-6 w-40 bg-yellow-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-yellow-700 transition"
          >
            Sign In →
          </button>

          {/* Sign Up */}
          <p className="mt-4 text-gray-700">
            Don't have an account?
            <Link to="/signup" className="text-blue-600 ml-1">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
