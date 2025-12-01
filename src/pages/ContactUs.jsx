import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 pt-32 pb-20">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900">Contact With Us</h1>
        <p className="text-gray-500 mt-1">Home &gt; Contact</p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-6">
        {/* LEFT SIDE - CONTACT CARDS */}
        <div className="space-y-8">
          {/* Phone Card */}
          <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-7 rounded-xl shadow-lg flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center text-3xl text-yellow-600 shadow-md">
              📞
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-lg mt-1">7303730943</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="w-full bg-white rounded-xl shadow-lg border p-7 flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex justify-center items-center text-3xl text-white shadow-md">
              ✉️
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                E-mail Address
              </h3>
              <p className="text-gray-700 mt-1">knowledgewaveindia@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full bg-white rounded-xl shadow-lg border p-10">
          <h2 className="text-3xl font-bold text-gray-900">Send Us Message</h2>
          <p className="text-gray-500 mt-1">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Comment */}
            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full h-40 border rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
            />

            {/* Name / Email / Website */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
              />

              <input
                name="website"
                type="text"
                placeholder="Website *"
                value={formData.website}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-300 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-10 py-3 rounded-full shadow-lg hover:opacity-90 transition-all text-lg font-semibold"
            >
              Submit Now →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
