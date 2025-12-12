import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../utils/userSlice.jsx";
import { BASE_URL } from "../../utils/constants.jsx";
import { persistor } from "../../utils/appStore";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const togglePassword = () => setShowPass(!showPass);

  useEffect(() => {
    if (user) {
      navigate("/profile");  // Already logged in → redirect
    }
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!emailId || !password) {
      setErrorMsg("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);

      // Login
      await axios.post(
        BASE_URL + "/auth/login",
        { emailId, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      // Fetch user
      const userRes = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      const user = userRes.data;

      if (!user || !user.emailId) {
        return setErrorMsg("Login successful but failed to load user data.");
      }

      dispatch(addUser(user));
      await persistor.flush();

      navigate("/profile");
    } catch (err) {
      const message =
        err.response?.data?.message || "Invalid credentials. Please try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex items-center justify-center px-4 py-10">

      {/* Main Card */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center drop-shadow">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Login to continue your learning journey
        </p>

        

        {/* Form */}
        <form className="mt-8">

          {/* Email */}
          <label className="block font-medium text-gray-800">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={emailId}
            onChange={(e) => { setEmailId(e.target.value); setErrorMsg(""); }}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
          />

          {/* Password */}
          <label className="block font-medium text-gray-800">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErrorMsg(""); }}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            />

            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-4 text-sm text-purple-700"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mt-2">
            <Link to="/forgot-password" className="text-purple-700 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Error Message */}
        {errorMsg && (
          <p className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mt-5 text-sm text-center border border-red-300">
            {errorMsg}
          </p>
        )}

          {/* Sign In Button */}
          <button
            onClick={handleClick}
            disabled={loading}
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-full shadow-lg transition disabled:bg-gray-400"
          >
            {loading ? "Signing In..." : "Sign In →"}
          </button>

          {/* Separator */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Create Account */}
          <p className="text-center text-gray-700">
            Don’t have an account?
            <Link to="/signup" className="text-purple-700 font-semibold hover:underline ml-1">
              Sign Up
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default LogIn;
