import React, { useState} from "react";
import {useDispatch} from "react-redux"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../utils/userSlice.jsx";
import { BASE_URL } from "../../utils/constants.jsx";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!emailId || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        BASE_URL + "/auth/login",
        {
          emailId,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("hijjh");
      dispatch(addUser(res.data));

      navigate("/profile"); // redirect to home

    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
      setEmailId("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-100 to-purple-50 flex flex-col items-center pt-10">
      <div className="w-full max-w-5xl px-6">
        <h1 className="text-4xl font-bold text-gray-800">Login</h1>
        <p className="text-gray-500 mt-2">Home &gt; Login</p>
      </div>

      <div className="w-full max-w-5xl mt-12 px-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Hey! Welcome Back
        </h2>

        <p className="text-gray-600 mt-2">Login to your Account to Continue</p>

        <form className="mt-8 max-w-md">

          {/* Email */}
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email / Id.
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Mail/Id"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
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
            disabled={loading}
            className="mt-6 w-40 bg-yellow-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-yellow-700 transition disabled:bg-gray-400"
          >
            {loading ? "Signing In..." : "Sign In →"}
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
