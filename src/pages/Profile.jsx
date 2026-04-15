import React, {useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { persistor } from "../utils/appStore";
import api from "../utils/axiosInstance";
import { startPremiumPayment } from "../services/paymentService";


const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user);
  // console.log("USER:", reduxUser); 
 
  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const [profileRes, verifyRes] = await Promise.all([
  api.get("/user/profile"),
  api.get("/premium/verify"),
]);


    if (verifyRes.data.data.isSubscribed) {
      // Already paid → skip payment
      setIsSubscribed(true);
    }
      setUser(profileRes.data.data);
    } catch (err) {
      console.error(err);
      navigate("/login"); // auto redirect if unauthorized
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);


const handleLogout = async () => {
  try {
    // 1️⃣ Call backend to clear cookie
    await api.get("/auth/logout");
  } catch (err) {
    // Even if backend fails, continue cleanup
    console.error("Logout API failed:", err);
  } finally {
    // 2️⃣ Clear fallback token (VERY IMPORTANT)
    localStorage.removeItem("token");

    // 3️⃣ Clear redux state
    dispatch(removeUser());

    // 4️⃣ Clear persisted redux storage
    await persistor.purge();

    // 5️⃣ Redirect
    navigate("/login", { replace: true });
  }
};

  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading Profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-600">
        No user found. Please login again.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 to-purple-50 pt-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Profile</h1>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-purple-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-purple-600">
              {user.fullName}
            </h2>
            <p className="text-gray-500 text-sm">Member Profile Details</p>
          </div>

          {/* GRID OF USER INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <InfoCard label="Email" value={user.emailId} />
            <InfoCard label="Mobile" value={user.mobile} />
            <InfoCard label="State" value={user.state} />
          </div>

          <div className="mt-8 flex gap-4">
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Admin Panel Button - Only for Admins */}
              {(user?.isAdmin || user?.role === "admin") && (
                <button
                  onClick={() => navigate("/admin-panel")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-md hover:scale-105 transition"
                >
                  Admin Panel
                </button>
              )}

              {isSubscribed ? (
                <Link
                  to="/course"
                  className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 hover:scale-105 transition"
                >
                  My Courses
                </Link>
              ) : (
                <button
                  onClick={() =>
                    startPremiumPayment({
                      user,
                      onSuccess: () => navigate("/course"),
                      onAlreadySubscribed: () => navigate("/course"),
                    })
                  }
                  className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 hover:scale-105 transition"
                >
                  Buy Course
                </button>
              )}

              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 hover:scale-105 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Small component for neat info boxes
const InfoCard = ({ label, value }) => (
  <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-gray-900 font-semibold">{value}</p>
  </div>
);

export default Profile;
