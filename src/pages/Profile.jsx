import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
          console.log(BASE_URL);
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true, // 🔥 REQUIRED for JWT cookie
        });
            
        // Your API returns user directly
        setUser(res.data);

      } catch (err) {
        console.error(err);
        alert("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-50 pt-10 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Your Profile
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-purple-200">
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-purple-700">
              {user.fullName}
            </h2>
            <p className="text-gray-600 mt-1">Member Profile Details</p>
          </div>

          {/* GRID OF USER INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <InfoCard label="Email" value={user.emailId} />
            <InfoCard label="Mobile" value={user.mobile} />
            <InfoCard label="State" value={user.state} />
            <InfoCard label="Package" value={(user.packages || []).join(", ")} />
  
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            
            <button
              className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition"
              onClick={async () => {
                await axios.get(BASE_URL + "/auth/logout", {
                  withCredentials: true,
                });
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
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
