import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../utils/axiosInstance";

const PaymentStatus = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const urlSuccess = params.get("success") === "true";

  const [isSuccess, setIsSuccess] = useState(urlSuccess);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await api.get("/premium/verify");

        if (res.data.data.isSubscribed) {
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      } catch {
        setIsSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        navigate("/course");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium">Verifying payment...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isSuccess ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-700 mt-2">
            Redirecting to your courses...
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Payment Failed ❌
          </h1>
          <p className="text-gray-700 mt-2">
            Redirecting back to courses...
          </p>
        </div>
      )}

      <button
        onClick={() => navigate("/course")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
      >
        Go to Courses Now
      </button>
    </div>
  );
};

export default PaymentStatus;
