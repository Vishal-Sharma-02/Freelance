import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../utils/axiosInstance";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = useSelector((state) => state.user);

  useEffect(() => {
  const fetchCourses = async () => {
    if (!user || !user._id) {
      setError("Please log in to view your purchased courses.");
      setLoading(false);
      return;
    }

    try {
      const res = await api.get(`/my-courses/${user._id}`);
      setCourses(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load purchased courses");
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, [user]);


  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 px-6 pt-10 text-gray-900">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">My Courses</h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Continue learning from the courses you have purchased.
        </p>
      </div>

      {/* LOADING */}
      {loading && <p className="text-center text-lg text-gray-500">Loading your courses...</p>}

      {/* ERROR */}
      {error && <p className="text-center text-red-500 font-semibold">{error}</p>}

      {/* COURSE GRID */}
      {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && courses.length === 0 && (
        <p className="text-center text-gray-500 text-xl">
          You haven't purchased any courses yet.
        </p>
      )}
    </div>
  );
};

export default MyCourses;
