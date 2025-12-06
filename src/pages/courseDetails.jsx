import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/course/${id}`);
        setCourse(res.data);

        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const purchased = await axios.get(
            `http://localhost:3000/api/purchase/check/${user._id}/${id}`
          );
          setIsPurchased(purchased.data.purchased);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="bg-gray-100 min-h-screen pt-10 pb-10">

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SECTION - Trailer + Description */}
        <div className="lg:col-span-2 space-y-6">

          {/* Video Card */}
          <div className="w-full h-[350px] bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-300">
            {course.trailerVideo ? (
              <video
                src={course.trailerVideo}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Description Box */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">About this course</h2>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              {course.fullDescription}
            </p>
          </div>

        </div>

        {/* RIGHT SECTION - Title + Buy + Modules */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit sticky top-24 max-h-[85vh] overflow-y-auto border border-gray-200">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {course.title}
          </h1>
          <p className="text-purple-600 font-medium mt-1">{course.category}</p>

          {/* BUY / START BUTTON */}
          <div className="mt-5">
            {/* {!isPurchased ? (
              <Link
                to={`/buy/${course._id}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Buy Course – ₹{course.price}
              </Link>
            ) : ( */}
              <Link
                to={`/learn/${course._id}`}
                className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
              >
                Start Learning →
              </Link>
            {/* )} */}
          </div>

          {/* MODULE LIST */}
          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800">
            Course Content
          </h2>

          {course.modules?.map((mod, i) => (
            <div key={i} className="mb-6">

              {/* Module Title */}
              <h3 className="font-semibold text-lg mb-2 text-blue-700">
                {i + 1}. {mod.moduleTitle}
              </h3>

              {/* Lecture List */}
              <ul className="space-y-2">
                {mod.lectures.map((lec, j) => (
                  <li
                    key={j}
                    className="p-3 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 flex justify-between text-sm cursor-pointer transition"
                  >
                    <span>{j + 1}. {lec.title}</span>
                    <span className="text-gray-600">⏳ {lec.duration}</span>
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
