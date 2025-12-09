import axios from "axios";
import { BASE_URL } from "../utils/constants";

const useRazorpayPayment = (user, onSuccess, onFail) => {
  return async function startPayment() {

    if (!user) {
      console.log("User not logged in");
      return;
    }

    try {
      // 1️⃣ Create order from backend
      const res = await axios.post(
        BASE_URL + "/payment/create",
        {},
        { withCredentials: true }
      );

      const { orderId, amount, currency, keyId, notes } = res.data;

      // 2️⃣ Razorpay checkout options
      const options = {
        key: keyId,
        amount,
        currency,
        name: "Anaylixhub",
        description: "Premium Subscription",
        order_id: orderId,

        prefill: {
          name: notes.fullName,
          email: user.emailId,
          contact: user.mobile,
        },

        handler: function (response) {
          console.log("Payment Success:", response);
          onSuccess(); // notify frontend success
        },

        modal: { ondismiss: onFail },

        theme: { color: "#3b82f6" },
      };

      // 3️⃣ Open Razorpay window
      const rzp = new window.Razorpay(options);

      // If payment fails →
      rzp.on("payment.failed", onFail);

      rzp.open();
      
    } catch (err) {
      console.log("Payment Error:", err);
      onFail();
    }
  };
};

export default useRazorpayPayment;
