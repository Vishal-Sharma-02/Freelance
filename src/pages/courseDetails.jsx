import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants.jsx";
import { useSelector } from "react-redux";
import useRazorpayPayment  from "../hooks/useRazorpayPayment";

const CourseDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  console.log("user1 :", user);

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUserSubscribed, setIsUserSubscribed] = useState(false);
  const startPayment = useRazorpayPayment();  

  // Auto payment after signup
  const autoPay = new URLSearchParams(location.search).get("startPayment");

  // Prevent Razorpay from triggering twice
  const paymentStarted = useRef(false);

  // -------------------------------------------------------
  // VERIFY SUBSCRIPTION
  // -------------------------------------------------------
  const verifyUserSubscription = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/premium/verify`, {
      withCredentials: true,
    });
    setIsUserSubscribed(res.data.isSubscribed);
  } catch {
    setIsUserSubscribed(false);
  }
};

  // -------------------------------------------------------
  // FETCH COURSE DATA
  // -------------------------------------------------------
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/course/${id}`);
        setCourse(res.data);

        if (user) await verifyUserSubscription();

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, user]);

  // -------------------------------------------------------
  // BUY BUTTON CLICK
  // -------------------------------------------------------
 const handleBuy = async () => {
  try {
    // 🔥 1. Verify backend session ― avoid trusting Redux only
    const res = await axios.get(`${BASE_URL}/profile/view`, {
      withCredentials: true,
    });

    const verifiedUser = res.data;

    // If no user → redirect
    if (!verifiedUser) {
      navigate("/signup");
      return;
    }

    const sub = await axios.get(`${BASE_URL}/premium/verify`, {
        withCredentials: true,
      });
      if (sub.data.isSubscribed) {
        return navigate(`/learn/${course._id}`);
    }

    // 🔥 2. Start payment using fresh user
    startPayment(
      verifiedUser,
      () => navigate("/payment-status?success=true"),
      () => navigate("/payment-status?success=false")
    );

  } catch (err) {
    // Backend says user not logged in
    navigate("/signup");
  }
};

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

          {/* Trailer */}
         <div className="w-full rounded-xl overflow-hidden shadow-sm border bg-black 
                h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] 
                flex items-center justify-center">

  {/* {course.trailerVideo ? (
    <video
      src={course.trailerVideo}
      autoPlay
      muted
      playsInline
      controls
      className="w-full h-full object-contain bg-black"
    />
  ) : ( */}
    <img
      src={course.thumbnail}
      alt={course.title}
      className="w-full h-full object-contain bg-black"
    />
  {/* )} */}

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
                onClick={handleBuy}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
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

          {/* MODULES */}
          <h2 className="text-xl font-bold mt-8 mb-4">Course Content</h2>

          {course?.modules?.map((mod, i) => (
            <div key={i} className="mb-6">
              <h3 className="font-semibold text-lg mb-2">
                {i + 1}. {mod.moduleTitle}
              </h3>

              <ul className="space-y-2">
                {mod.lectures.map((lec, j) => (
                  <li
                    key={j}
                    className="p-3 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition"
                  >
                    {j + 1}. {lec.title} • {lec.duration}
                  </li>
                ))}
              </ul>

              <hr className="mt-4 opacity-30" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;
