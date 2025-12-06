import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Learning = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:3000/course/${id}`);
      setCourse(res.data);

      // Default: First lecture
      const first = res.data.modules[0]?.lectures[0];
      if (first) setCurrentVideo(first);
    };

    fetch();
  }, [id]);

  if (!course) return <p className="text-center mt-20 text-lg">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Top Sticky Course Title */}
      <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-20 border-b">
        <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-gray-500 text-sm">{course.modules.length} Modules • {course.totalLectures} Lectures</p>
      </div>

      <div className="max-w-7xl mx-auto p-6 flex gap-6">

        {/* LEFT: Video Player */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-4 border">

          {currentVideo ? (
            <>
              {/* Video */}
              <div className="w-full h-[450px] bg-black rounded-lg overflow-hidden">
                <video
                  src={currentVideo.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Title */}
              <h2 className="text-xl font-bold mt-4 text-gray-900">
                {currentVideo.title}
              </h2>
              <p className="text-gray-600 mt-1">{currentVideo.duration}</p>

              {/* Description */}
              <p className="text-gray-700 mt-3 leading-relaxed">
                {currentVideo.description || "No description available"}
              </p>
            </>
          ) : (
            <p className="text-gray-500">Select a lecture to start learning</p>
          )}

        </div>

        {/* RIGHT: Modules */}
        <div className="w-96 bg-white rounded-xl shadow-md border p-4 overflow-y-auto max-h-[85vh] sticky top-24">

          <h2 className="text-xl font-bold mb-4 text-gray-900">Course Content</h2>

          {course.modules.map((mod, index) => (
            <div key={index} className="mb-6">

              <h3 className="font-semibold text-lg mb-2 text-blue-700">
                {index + 1}. {mod.moduleTitle}
              </h3>

              <ul className="space-y-2">
                {mod.lectures.map((lec, lecIndex) => {
                  const isActive = currentVideo?._id === lec._id;

                  return (
                    <li
                      key={lecIndex}
                      onClick={() => setCurrentVideo(lec)}
                      className={`
                        p-2 rounded-lg flex justify-between items-center cursor-pointer transition
                        ${isActive ? "bg-blue-100 border border-blue-400" : "bg-gray-100 hover:bg-gray-200"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        {/* Lecture Thumbnail */}
                        {lec.thumbnail ? (
                          <img
                            src={lec.thumbnail}
                            alt={lec.title}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                        )}

                        <span className="font-medium text-gray-800">
                          {lecIndex + 1}. {lec.title}
                        </span>
                      </div>

                      <span className="text-gray-600 text-sm">⏳ {lec.duration}</span>
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
