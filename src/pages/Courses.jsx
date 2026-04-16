import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import api from "../utils/axiosInstance";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/course");
        setCourses(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-white to-gray-100 px-6 pt-10 text-gray-900">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-16">
        <div className="text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">All Courses</h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Explore our expertly crafted courses designed to help you grow and excel.
          </p>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg text-gray-500">Loading courses...</p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {/* COURSE GRID */}
      {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}

      {!loading && courses.length === 0 && (
        <p className="text-center text-gray-500 text-xl">No courses available.</p>
      )}
    </div>
  );
};

export default Courses;
