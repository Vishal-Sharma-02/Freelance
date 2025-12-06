import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    packages: "",
    sponserName: "",
    sponserId: "",
    fullName: "",
    emailId: "",
    confirmEmail: "",
    mobile: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Update form values
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Handler
 const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic Validations
  if (form.emailId !== form.confirmEmail) {
    alert("Emails do not match");
    return;
  }
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  if (!form.packages || form.packages === "Select Package") {
    alert("Please select a package");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:3000/auth/register",
      {
        fullName: form.fullName,
        sponserName: form.sponserName,
        sponserId: form.sponserId,
        emailId: form.emailId,
        password: form.password,
        mobile: form.mobile,
        state: form.state,
        packages: [form.packages],
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    const data = res.data;

    if (res.status !== 201) {
      alert(data.message || "Registration failed");
      return;
    }

    dispatch(addUser(res.data.data));
    navigate("/login");

  } catch (err) {
    console.error(err);

    alert(err.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 pt-32">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-purple-700">Sign Up</h1>
        <p className="text-gray-600 mt-1">
          Home <span className="text-purple-600">› Sign Up</span>
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white p-10 rounded-xl shadow-xl border border-purple-100">
        <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Welcome! Fill out the details below to get started.
        </p>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* PACKAGE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Select Package
            </label>
            <select
              name="packages"
              value={form.packages}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option>Select Package</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          {/* SPONSER ID + NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="sponserId"
              value={form.sponserId}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Sponsor ID"
            />
            <input
              name="sponserName"
              value={form.sponserName}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Sponsor Name"
            />
          </div>

          {/* FULL NAME */}
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            placeholder="Full Name"
          />

          {/* EMAIL + CONFIRM EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="emailId"
              value={form.emailId}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Enter Email"
            />
            <input
              name="confirmEmail"
              value={form.confirmEmail}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Confirm Email"
            />
          </div>

          {/* MOBILE */}
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            placeholder="Mobile Number"
          />

          {/* STATE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Select State
            </label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option>Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="RJ">Rajasthan</option>
            </select>
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
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
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              placeholder="Confirm Password"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 text-xl"
            >
              👁️
            </span>
          </div>

          {/* BUTTON */}
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full mt-4 font-semibold text-lg shadow-lg hover:bg-purple-700 transition">
            Sign Up →
          </button>

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
