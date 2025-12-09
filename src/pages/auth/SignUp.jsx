import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice.jsx";
import { BASE_URL } from "../../utils/constants.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user); // 👈 Watch Redux user

  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    confirmEmail: "",
    mobile: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.emailId !== form.confirmEmail) {
      alert("Emails do not match");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      
      const res = await axios.post(
        BASE_URL + "/auth/register",
        {
          fullName: form.fullName,
          emailId: form.emailId,
          password: form.password,
          mobile: form.mobile,
          state: form.state,
        },
        { withCredentials: true }
      );
      
      console.log("Hiioio");
      // Save user to Redux
      dispatch(addUser(res.data.user));

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  // 🚀 Auto-redirect AFTER Redux updates with user data
  useEffect(() => {
    if (user) {
      navigate("/payment-start");
    }
  }, [user]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 pt-10">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-xl mt-10">

        <h2 className="text-3xl font-bold">Create Your Account</h2>

        <form className="space-y-5 mt-6" onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            placeholder="Full Name"
            required
          />

          {/* EMAIL + CONFIRM EMAIL */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="emailId"
              value={form.emailId}
              onChange={handleChange}
              className="border p-3 rounded-lg"
              placeholder="Email"
              required
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
            required
          />

          {/* STATE */}
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          >
            <option>Select State</option>
            <option value="Delhi">Delhi</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="RJ">Rajasthan</option>
          </select>

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            placeholder="Password"
            required
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            placeholder="Confirm Password"
            required
          />

          {/* SUBMIT BUTTON */}
          <button className="bg-purple-600 text-white py-3 px-6 rounded-full w-full">
            Sign Up →
          </button>

        </form>

        <p className="mt-4 text-gray-700 text-center">
  Already have an account?
  <Link to="/login" className="text-blue-600 ml-1 font-semibold">
    Login
  </Link>
</p>
      </div>
    </div>
  );
};

export default SignUp;
