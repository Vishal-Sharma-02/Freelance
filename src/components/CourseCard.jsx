import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 p-5">

      {/* Thumbnail */}
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>

      {/* Category */}
      <p className="text-sm text-purple-600 font-medium mt-1">
        {course.category}
      </p>

      {/* Short Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {course.shortDescription}
      </p>

      {/* Course Info */}
      <div className="flex justify-between text-sm text-gray-700 mt-4">
        <span>⏳ {course.duration}</span>
        <span>🎥 {course.totalLectures} Lectures</span>
      </div>

      {/* Price */}
      <p className="text-lg font-semibold text-blue-900 mt-3">
        ₹ {course.price}
      </p>

      {/* Explore Button */}
      <Link
        to={`/course/${course._id}`}
        className="mt-4 block text-center px-6 py-2 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 transition"
      >
        Explore →
      </Link>

    </div>
  );
};

export default CourseCard;
