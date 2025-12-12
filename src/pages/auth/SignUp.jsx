import axios from "axios";
import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice.jsx";
import { BASE_URL } from "../../utils/constants.jsx";
import useRazorpayPayment from "../../hooks/useRazorpayPayment";
import { persistor } from "../../utils/appStore";
import { useSelector } from "react-redux";

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


  useEffect(() => {
      if (userExist) {
        navigate("/profile");  // Already logged in → redirect
      }
    }, []);

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

    if (form.emailId !== form.confirmEmail) {
      return setErrorMsg("Email and Confirm Email do not match.");
    }
    if (form.password !== form.confirmPassword) {
      return setErrorMsg("Password and Confirm Password do not match.");
    }
    if (!acceptTerms || !acceptPrivacy) {
      return setErrorMsg("You must accept Terms & Conditions and Privacy Policy.");
    }

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/auth/register`, form, {
        withCredentials: true,
      });

      const resUser = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });

      const freshUser = resUser.data;

      if (!freshUser || !freshUser.emailId) {
        return setErrorMsg("Signup successful, but profile data could not be loaded.");
      }

      dispatch(addUser(freshUser));
      setUser(freshUser);

      await persistor.flush();

      startPayment(
        freshUser,
        () => navigate("/payment-status?success=true"),
        () => navigate("/payment-status?success=false")
      );

    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong during signup.";
      setErrorMsg(message);
      console.error(err);
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

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition disabled:bg-gray-400"
        >
          {loading ? "Please wait..." : "Sign Up →"}
        </button>

      </form>

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
