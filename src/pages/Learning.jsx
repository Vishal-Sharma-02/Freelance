import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PlayCircle } from "lucide-react";
import { BASE_URL } from "../utils/constants.jsx";

const Learning = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${BASE_URL}/course/${id}`);
      setCourse(res.data);

      const first = res.data.modules[0]?.lectures[0];
      if (first) setCurrentVideo(first);
    };

    fetch();
  }, [id]);

  if (!course) return <p className="text-center mt-20 text-lg">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#F5F7FA]">

      {/* TOP HEADER */}
      <div className="bg-white px-36 py-5 shadow-sm border-b sticky top-0 z-20">
        <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {course.modules.length} Modules • {course.totalLectures} Lectures
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto p-6 flex gap-8">

        {/* LEFT - VIDEO PLAYER SECTION */}
        <div className="flex-1">
          
          {/* Video Card */}
          <div className="bg-white shadow-md rounded-2xl border p-5">
            <div className="w-full h-[460px] bg-black rounded-xl overflow-hidden">
              <video
                src={currentVideo?.videoUrl}
                controls
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Title */}
            <h2 className="text-xl font-semibold text-gray-900 mt-5">
              {currentVideo?.title}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Duration: {currentVideo?.duration}
            </p>

            {/* Description */}
            <p className="text-gray-700 mt-4 leading-relaxed text-[15px]">
              {currentVideo?.description || "No description available"}
            </p>
          </div>
        </div>

        {/* RIGHT - MODULE LIST SECTION */}
        <div className="w-[360px] bg-white shadow-md rounded-2xl border p-5 h-fit sticky top-24 max-h-[85vh] overflow-y-auto">

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Course Content
          </h3>

          {course.modules.map((mod, i) => (
            <div key={i} className="mb-6">

              <h4 className="font-semibold text-gray-800 mb-3 text-[17px]">
                {i + 1}. {mod.moduleTitle}
              </h4>

              <ul className="space-y-2">
                {mod.lectures.map((lec, j) => {
                  const isActive = currentVideo?._id === lec._id;

                  return (
                    <li
                      key={j}
                      onClick={() => setCurrentVideo(lec)}
                      className={`flex justify-between items-center p-3 rounded-lg cursor-pointer border transition
                        ${
                          isActive
                            ? "bg-blue-50 border-blue-400 border-l-4"
                            : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">

                        {/* Play Icon */}
                        <PlayCircle
                          size={22}
                          className={`${
                            isActive ? "text-blue-600" : "text-gray-500"
                          } mt-1`}
                        />

                        <div>
                          <p
                            className={`text-[15px] font-medium ${
                              isActive ? "text-blue-700" : "text-gray-800"
                            }`}
                          >
                            {j + 1}. {lec.title}
                          </p>

                          <span className="text-xs text-gray-500">
                            ⏳ {lec.duration}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Learning;
