import api from "../utils/axiosInstance";
import { loadRazorpay } from "../utils/loadRazorpay";

export const startPremiumPayment = async ({
  user,
  onSuccess,
  onFail,
  onAlreadySubscribed,
}) => {
  try {
    if (!user) {
      alert("Please login first");
      return;
    }

    // 1️⃣ VERIFY SUBSCRIPTION FIRST (IMPORTANT)
    const verifyRes = await api.get("/premium/verify");

    if (verifyRes.data.data.isSubscribed) {
      // Already paid → skip payment
      onAlreadySubscribed?.();
      return;
    }

    // 2️⃣ Load Razorpay (iOS-safe)
    const loaded = await loadRazorpay();
    if (!loaded || !window.Razorpay) {
      alert("Payment system failed to load. Please try again.");
      return;
    }

    // 3️⃣ Create order
    const res = await api.post("/payment/create");

    const options = {
      key: res.data.data.keyId,
      amount: res.data.data.amount,
      currency: res.data.data.currency,
      order_id: res.data.data.orderId,

      name: "Anaylixhub",
      description: "Premium Subscription",

      prefill: {
        name: user.fullName,
        email: user.emailId,
        contact: user.mobile,
      },

      handler: () => {
        onSuccess?.();
      },

      modal: {
        ondismiss: () => {
          onFail?.();
        },
      },
    };

    // 🚀 MUST be triggered by user click (iOS rule)
    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    console.error("Payment error:", err);
    alert("Something went wrong. Please try again.");
    onFail?.();
  }
};
