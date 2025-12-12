import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Webinar = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

   const user = useSelector((state) => state.user);
   const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if(!user){
        navigate("/login");
        return
      }

      const res = await axios.post(`${BASE_URL}/webinar/contact`, form);

      if (res.data.success) {
        setSuccessMsg("Thank you! We will contact you within 24 hours or sooner.");
        setForm({ name: "", email: "", phone: "", message: "" }); // reset form
        setTimeout(() => setSuccessMsg(""), 3000); // clear message after 10 seconds
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900">Get Webinar Link</h1>
      </div>

      <div className="flex justify-center mt-12 px-6">
        <div className="bg-white shadow-xl border rounded-2xl p-10 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Enter Your Details</h2>

          {successMsg && (
            <p className="mb-5 text-green-600 font-semibold bg-green-100 p-3 rounded-lg">
              {successMsg}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email Address *"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter Mobile Number *"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />

            {/* OPTIONAL MESSAGE FIELD */}
            <textarea
              name="message"
              placeholder="Message (Optional)"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg h-28 resize-none focus:ring-2 focus:ring-purple-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90 text-white px-10 py-3 rounded-full text-lg font-semibold transition-all shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
