import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../utils/axiosInstance";
import { loadRazorpay } from "../utils/loadRazorpay";
import { startPremiumPayment } from "../services/paymentService";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUserSubscribed, setIsUserSubscribed] = useState(false);

  // -------------------------------------------------------
  // VERIFY SUBSCRIPTION
  // -------------------------------------------------------
  const verifyUserSubscription = async () => {
    try {
      const res = await api.get("/premium/verify");
      setIsUserSubscribed(res.data.isSubscribed);
    } catch {
      setIsUserSubscribed(false);
    }
  };

  // Preload Razorpay (better UX)
  useEffect(() => {
    loadRazorpay();
  }, []);

  // -------------------------------------------------------
  // FETCH COURSE DATA
  // -------------------------------------------------------
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/course/${id}`);
        setCourse(res.data);

        // Always verify (backend will reject if not logged in)
        await verifyUserSubscription();

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // -------------------------------------------------------
  // LOADING STATES
  // -------------------------------------------------------
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-700 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!course) return <p>Course not found.</p>;

  // -------------------------------------------------------
  // UI
  // -------------------------------------------------------
  return (
    <div className="bg-gray-100 min-h-screen pt-10 pb-10">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">

          {/* Trailer / Thumbnail */}
          <div className="w-full rounded-xl overflow-hidden shadow-sm border bg-black 
                h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] 
                flex items-center justify-center">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-contain bg-black"
            />
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h2 className="text-2xl font-bold mb-3">About this course</h2>
            <p className="text-gray-700">{course.fullDescription}</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit sticky top-24 border">

          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-purple-600 font-medium mt-1">{course.category}</p>

          {/* BUY BUTTON */}
          <div className="mt-5">
            {!isUserSubscribed ? (
              <button
                onClick={() =>
                  startPremiumPayment({
                    user,
                    onSuccess: () => navigate(`/learn/${course._id}`),
                    onAlreadySubscribed: () =>
                      navigate(`/learn/${course._id}`),
                  })
                }
                className="
                  w-full sm:w-auto
                  px-8 py-3
                  bg-gradient-to-r from-blue-600 to-blue-800
                  text-white text-lg font-semibold
                  rounded-full
                  shadow-lg
                  hover:from-blue-700 hover:to-blue-900
                  active:scale-95
                  transition
                  duration-200
                "
              >
                Buy Now
              </button>
            ) : (
              <Link
                to={`/learn/${course._id}`}
                className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
              >
                Start Learning →
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
