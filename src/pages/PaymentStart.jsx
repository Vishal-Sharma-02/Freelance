import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startPremiumPayment } from "../services/paymentService";

const PaymentStart = () => {
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  useEffect(() => {
    const initiatePayment = async () => {
      if (!user) {
        navigate("/login");
        return;
      }

      await startPremiumPayment({
        user,
        onSuccess: () => navigate("/payment-status?success=true"),
        onFail: () => navigate("/payment-status?success=false"),
        onAlreadySubscribed: () => navigate("/course"),
      });
    };

    initiatePayment();
  }, [user, navigate]);

  return (
    <p className="text-center mt-10 text-lg font-medium">
      Starting Payment...
    </p>
  );
};

export default PaymentStart;
