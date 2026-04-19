import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const emailId = new URLSearchParams(location.search).get("emailId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/auth/reset-password`, {
        emailId,
        newPassword: pass
      });

      alert("Password Reset Successful!");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="password"
            placeholder="New Password"
            className="border p-3 rounded-lg w-full"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-3 rounded-lg w-full"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button className="bg-purple-600 text-white w-full py-3 rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
