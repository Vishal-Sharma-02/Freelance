import React, { useState } from "react";

const Webinar = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Next button clicked!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50  py-10">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900">Get Webinar Link</h1>
        <p className="text-gray-500 mt-1">Home &gt; Get Webinar Link</p>
      </div>

      {/* Form Container */}
      <div className="flex justify-center mt-12 px-6">
        <div className="bg-white shadow-xl border rounded-2xl p-10 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Enter Your Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address *"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Enter Mobile Number *"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90 text-white px-10 py-3 rounded-full text-lg font-semibold transition-all shadow-md flex items-center gap-2"
            >
              Next →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
