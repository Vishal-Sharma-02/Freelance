import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addUser, removeUser, setLoading } from "../utils/userSlice";
import { persistor } from "../utils/appStore";
import api from "../utils/axiosInstance";
import { clearAuth, getToken } from "../utils/authUtils";
import { startPremiumPayment } from "../services/paymentService";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    // Validate token exists before fetching profile
    const token = getToken();
    if (!token) {
      dispatch(removeUser());
      navigate("/login", { replace: true });
      return;
    }

    const fetchProfile = async () => {
      try {
        dispatch(setLoading(true));

        const res = await api.get("/user/profile");

        dispatch(addUser(res?.data?.data));
      } catch (err) {
        console.error(err);
        dispatch(removeUser());

        if (!err.response || err.response.status !== 401) {
          navigate(
            "/error?message=Failed%20to%20load%20profile.&details=Please%20try%20again%20after%20clearing%20browser%20cache%20or%20site%20data.",
            { replace: true }
          );
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProfile();
  }, []); 

  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");
    } catch (err) {
      console.error("Logout API failed:", err);
    } finally {
      clearAuth();
      dispatch(removeUser());
      await persistor.purge();
      navigate("/login", { replace: true });
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading Profile...
      </div>
    );
  }

  //  No user
  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-600">
        No user found. Please login again.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-slate-100 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8 rounded-4xl border border-purple-100 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-purple-600">Account</p>
              <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Hi, {user.fullName}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Your profile at a glance.
              </p>
            </div>
            <div className="rounded-3xl border border-purple-200 bg-purple-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-purple-600">Subscription</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">
                {(user?.isSubscribed ?? user?.subscribed) ? "Active" : "Not active"}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {(user?.isSubscribed ?? user?.subscribed)
                  ? "Premium access enabled."
                  : "Subscribe for premium content."}
              </p>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
            <div className="rounded-3xl bg-linear-to-br from-purple-600 to-indigo-600 p-6 text-white shadow-xl order-1 lg:order-2">
              <div className="space-y-10">
                <div>
                  <h2 className="text-lg font-semibold uppercase tracking-[0.24em] text-purple-200">Quick actions</h2>
                 
                </div>

                {(user?.isSubscribed ?? user?.subscribed) ? (
                  <Link
                    to="/course"
                    className="block w-full rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-white/90"
                  >
                    View My Courses
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
                    className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-white/90"
                  >
                    Buy Course
                  </button>
                )}

                {(user?.role === "admin") && (
                  <button
                    onClick={() => navigate("/admin-panel")}
                    className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-white/90"
                  >
                    Open Admin Panel
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900">Personal details</h2>
                <p className="mt-2 text-sm text-slate-500">Manage your contact info and subscription details.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard label="Email" value={user.email || user.emailId || "N/A"} />
                <InfoCard label="Mobile" value={user.mobile} />
                <InfoCard label="State" value={user.state || "Not set"} />
                <InfoCard
                  label="Membership"
                  value={(user?.isSubscribed ?? user?.subscribed) ? "Premium" : "Basic"}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// InfoCard Component
const InfoCard = ({ label, value }) => (
  <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-gray-900 font-semibold">{value}</p>
  </div>
);

export default Profile;