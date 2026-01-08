import React, { useEffect, useState , useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import api from "../utils/axiosInstance";

const Learning = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/course/${id}`);
        setCourse(res.data);

        const first = res.data.modules?.[0]?.lectures?.[0];
        if (first) setCurrentVideo(first);
      } catch (err) {
        console.error(err);
        // Unauthorized → redirect
        navigate("/login");
      }
    };

    fetchCourse();
  }, [id, navigate]);

  useEffect(() => {
  if (videoRef.current && currentVideo) {
    videoRef.current.load();   // reload new source
    videoRef.current.play().catch(() => {
      // iOS may block if not considered user gesture
    });
  }
}, [currentVideo]);


// FULL PAGE LOADING SCREEN
if (!course) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-gray-700 text-lg font-medium mt-4">
        Loading course...
      </p>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-[#F5F7FA]">

      {/* TOP HEADER */}
      <div className="bg-white px-6 md:px-36 py-5 shadow-sm border-b sticky top-0 z-20">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {course.modules.length} Modules • {course.totalLectures} Lectures
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-8">

        {/* LEFT - VIDEO PLAYER SECTION */}
        <div className="flex-1 order-1">

          {/* Video Card */}
          <div className="bg-white shadow-md rounded-2xl border p-4 md:p-5">
            
            {/* Responsive Video */}
            <div className="w-full h-[220px] sm:h-[300px] md:h-[460px] bg-black rounded-xl overflow-hidden flex items-center justify-center">
              <video
               ref={videoRef}
                src={currentVideo?.videoUrl}
                controls
                className="w-full h-full object-contain bg-black"
              />
            </div>

            {/* Video Title */}
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">
              {currentVideo?.title}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Duration: {currentVideo?.duration}
            </p>

            {/* Description */}
            <p className="text-gray-700 mt-3 md:mt-4 leading-relaxed text-[14px] md:text-[15px]">
              {currentVideo?.description || "No description available"}
            </p>
          </div>
        </div>

        {/* RIGHT - MODULE LIST SECTION */}
        <div className="order-2 w-full md:w-[360px] bg-white shadow-md rounded-2xl border p-4 md:p-5 h-fit md:sticky md:top-24 max-h-[85vh] overflow-y-auto">

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Course Content
          </h3>

          {course.modules.map((mod, i) => (
            <div key={i} className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-[16px] md:text-[17px]">
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
                        ${isActive
                          ? "bg-blue-50 border-blue-400 border-l-4"
                          : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                        }`}
                    >
                      <div className="flex items-start gap-3">

                        {/* Play Icon */}
                        <PlayCircle
                          size={22}
                          className={`${isActive ? "text-blue-600" : "text-gray-500"} mt-1`}
                        />

                        <div>
                          <p className={`text-[14.5px] md:text-[15px] font-medium 
                              ${isActive ? "text-blue-700" : "text-gray-800"}`}>
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
