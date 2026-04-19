import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const emailId = new URLSearchParams(location.search).get("emailId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/auth/verify-otp`, {
        emailId,
        otp,
      });

      alert("OTP Verified Successfully");
      navigate(`/reset-password?emailId=${emailId}`);

    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            className="border p-3 rounded-lg w-full"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button className="bg-purple-600 text-white w-full py-3 rounded-lg">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
