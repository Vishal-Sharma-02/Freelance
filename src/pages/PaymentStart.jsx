import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  useRazorpayPayment  from "../hooks/useRazorpayPayment";

const PaymentStart = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const startPayment = useRazorpayPayment(
    user,
    () => navigate("/course"),                    
    () => navigate("/course?error=payment_failed")
  );

  useEffect(() => {
    if (!user) return;   // Wait until redux user is available

    startPayment();       // Now Razorpay will open properly
  }, [user]);

  return <p className="text-center mt-10">Starting Payment...</p>;
};

export default PaymentStart;
