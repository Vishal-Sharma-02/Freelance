import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice.jsx";
import useRazorpayPayment from "../../hooks/useRazorpayPayment";
import { persistor } from "../../utils/appStore";
import { useSelector } from "react-redux";
import api from "../../utils/axiosInstance";
import { loadRazorpay } from "../../utils/loadRazorpay";
import { startPremiumPayment } from "../../services/paymentService";



const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const startPayment = useRazorpayPayment();
  const userExist = useSelector((state) => state.user);

  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const togglePassword = () => setShowPass(!showPass);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);


  const indianStatesAndUTs = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
    "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
    "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
    "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
    "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
  ];

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
const [orderData, setOrderData] = useState(null);
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

useEffect(() => {
  if (showSignupPopup) {
    const load = async () => {
      const loaded = await loadRazorpay();
      setRazorpayReady(loaded);
    };
    load();
  }
}, [showSignupPopup]);


  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    confirmEmail: "",
    mobile: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailId) || form.emailId !== form.confirmEmail) {
      return setErrorMsg("Email and Confirm Email do not match.");
    }


if (!passwordRegex.test(form.password)) {
  return setErrorMsg(
    "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
  );
}
    if (form.password !== form.confirmPassword) {
      return setErrorMsg("Password and Confirm Password do not match.");
    }
    if (form.mobile.length !== 10 || !/^\d{10}$/.test(form.mobile)) {
      return setErrorMsg("Check Mobile number");
    }
    if (!acceptTerms || !acceptPrivacy) {
      return setErrorMsg("You must accept Terms & Conditions and Privacy Policy.");
    }

  try {
    setLoading(true);

    const res = await api.post("/auth/register", form);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    dispatch(addUser(res.data.user));
    await persistor.flush();
    setRegisteredUser(res.data.user);

    // 🔐 create order AFTER signup
    const orderRes = await api.post("/payment/create");

    setOrderData(orderRes.data);
    setShowSignupPopup(true);
  } catch (err) {
    const message =
      err.response?.data?.message || "Something failed.";
    setErrorMsg(message);
  } finally {
    setLoading(false);
  }
};


  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-white flex justify-center items-start py-16 px-4">

    {/* FORM WRAPPER */}
    <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-purple-200 shadow-xl rounded-2xl p-10">

      {/* HEADING */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
        Create Your Account
      </h1>

      <p className="text-center text-gray-600 mt-2">
        Join AnaylixHub and start your learning journey 🚀
      </p>

     

      {/* FORM */}
      <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

        {/* FULL NAME */}
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Full Name"
          required
        />

        {/* Email + Confirm Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="emailId"
            value={form.emailId}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Email"
            required
          />

          <input
            name="confirmEmail"
            value={form.confirmEmail}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Confirm Email"
            required
          />
        </div>

        {/* MOBILE */}
        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none w-full"
          placeholder="Mobile Number"
          required
        />

        {/* STATE */}
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none w-full"
          required
        >
          <option value="">Select State / UT</option>
          {indianStatesAndUTs.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* PASSWORDS */}

          <div className="relative">
        <input
          type={showPass ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none w-full"
          placeholder="Password"
          required
        />
         <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-4 text-sm text-purple-700"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none w-full"
          placeholder="Confirm Password"
          required
        />

        {/* TERMS AREA */}
        <div className="space-y-2 text-gray-700">

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="h-5 w-5"
            />
            I agree to the{" "}
            <Link to="/termsCondition" className="text-purple-700 underline">
              Terms & Conditions
            </Link>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={acceptPrivacy}
              onChange={() => setAcceptPrivacy(!acceptPrivacy)}
              className="h-5 w-5"
            />
            I agree to the{" "}
            <Link to="/privacyPolicy" className="text-purple-700 underline">
              Privacy Policy
            </Link>
          </label>

        </div>

         {/* ERROR */}
      {errorMsg && (
        <p className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mt-6 text-center">
          {errorMsg}
        </p>
      )}

        {/* SUBMIT / PAYMENT BUTTON */}
        <button
    type="submit"
    disabled={loading}
    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition disabled:bg-gray-400"
  >
    {loading ? "Please wait..." : "Sign Up →"}
  </button>

      </form>

{showSignupPopup && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">

      <h2 className="text-2xl font-bold text-green-600">
        🎉 Signup Successful!
      </h2>

      <p className="text-gray-600 mt-3">
        Your account has been created successfully.
        Proceed to payment to unlock premium access.
      </p>

      <button
  onClick={() =>
    startPremiumPayment({
      user: registeredUser,
      onSuccess: () => navigate("/payment-status?success=true"),
      onFail: () => navigate("/payment-status?success=false"),
      onAlreadySubscribed: () => navigate("/course"),
    })
  }
  className="w-full bg-blue-600 text-white py-3 rounded-full font-bold rounded-full"
>
  Continue to Payment →
</button>


    </div>
  </div>
)}



      {/* LOGIN LINK */}
      <p className="mt-6 text-center text-gray-700">
        Already have an account?
        <Link to="/login" className="text-purple-700 ml-1 font-semibold">
          Login
        </Link>
      </p>

    </div>
  </div>
);

};

export default SignUp;
