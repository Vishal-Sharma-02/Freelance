const useRazorpayPayment = () => {
  return function startPayment(orderData, user, onSuccess, onFail) {
    if (!window.Razorpay) {
      alert("Payment system still loading. Please try again.");
      return;
    }
    if (!orderData || !user) return;

    const options = {
      key: orderData.keyId,
      amount: orderData.amount,
      currency: orderData.currency,
      order_id: orderData.orderId,

      name: "Anaylixhub",
      description: "Premium Subscription",

      prefill: {
        name: user.fullName,
        email: user.emailId,
        contact: user.mobile,
      },

      handler: function () {
        onSuccess();
      },

      modal: {
        ondismiss: function () {
          onFail();
        },
      },
    };

    // 🚀 MUST be synchronous
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
};

export default useRazorpayPayment;
