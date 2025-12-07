import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants.jsx";

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    thumbnail: "",
    trailerVideo: "",
    trailerThumbnail: "",
    price: "",
    duration: "",
    modules: []
  });

  // Add New Module
  const addModule = () => {
    setCourse({
      ...course,
      modules: [...course.modules, { moduleTitle: "", lectures: [] }]
    });
  };

  // Update Module Title
  const updateModuleTitle = (index, value) => {
    const updatedModules = [...course.modules];
    updatedModules[index].moduleTitle = value;
    setCourse({ ...course, modules: updatedModules });
  };

  // Add Lecture to a Module
  const addLecture = (moduleIndex) => {
    const updatedModules = [...course.modules];
    updatedModules[moduleIndex].lectures.push({
      title: "",
      videoUrl: "",
      thumbnail: "", // ⭐ NEW FIELD
      duration: "",
      description: ""
    });
    setCourse({ ...course, modules: updatedModules });
  };

  // Update Lecture
  const updateLecture = (moduleIndex, lectureIndex, field, value) => {
    const updatedModules = [...course.modules];
    updatedModules[moduleIndex].lectures[lectureIndex][field] = value;
    setCourse({ ...course, modules: updatedModules });
  };

  // Submit Course
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/course/create`,
        course,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Course Created Successfully!");
      console.log(res.data);

      setCourse({
        title: "",
        shortDescription: "",
        fullDescription: "",
        category: "",
        thumbnail: "",
        trailerVideo: "",
        trailerThumbnail: "",
        price: "",
        duration: "",
        modules: []
      });
    } catch (err) {
      alert("Error Creating Course");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">Add New Course</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="font-semibold">Course Title</label>
            <input
              type="text"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.title}
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="font-semibold">Short Description</label>
            <textarea
              maxLength="200"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.shortDescription}
              onChange={(e) =>
                setCourse({ ...course, shortDescription: e.target.value })
              }
              required
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="font-semibold">Full Description</label>
            <textarea
              rows="6"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.fullDescription}
              onChange={(e) =>
                setCourse({ ...course, fullDescription: e.target.value })
              }
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-semibold">Category</label>
            <select
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.category}
              onChange={(e) =>
                setCourse({ ...course, category: e.target.value })
              }
              required
            >
              <option value="">Select Category</option>
              <option>Video Editing</option>
              <option>Social Media Marketing</option>
              <option>Digital Marketing</option>
              <option>Graphic Design</option>
              <option>Data Science</option>
              <option>Other</option>
            </select>
          </div>

          {/* Course Thumbnail */}
          <div>
            <label className="font-semibold">Course Thumbnail URL</label>
            <input
              type="text"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.thumbnail}
              onChange={(e) =>
                setCourse({ ...course, thumbnail: e.target.value })
              }
              required
            />
          </div>

          {/* Trailer Video */}
          <div>
            <label className="font-semibold">Trailer Video URL</label>
            <input
              type="text"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.trailerVideo}
              onChange={(e) =>
                setCourse({ ...course, trailerVideo: e.target.value })
              }
            />
          </div>

          {/* Trailer Thumbnail */}
          <div>
            <label className="font-semibold">Trailer Thumbnail URL</label>
            <input
              type="text"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.trailerThumbnail}
              onChange={(e) =>
                setCourse({ ...course, trailerThumbnail: e.target.value })
              }
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold">Course Price (₹)</label>
            <input
              type="number"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.price}
              onChange={(e) =>
                setCourse({ ...course, price: e.target.value })
              }
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="font-semibold">Course Duration</label>
            <input
              type="text"
              className="w-full border px-4 py-2 mt-1 rounded-md"
              value={course.duration}
              onChange={(e) =>
                setCourse({ ...course, duration: e.target.value })
              }
              required
            />
          </div>

          {/* MODULES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Modules</h2>

            {course.modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="border p-4 rounded-lg mb-4 bg-gray-50">

                {/* Module Title */}
                <input
                  type="text"
                  className="border px-4 py-2 rounded-md w-full mb-3"
                  placeholder="Module Title"
                  value={module.moduleTitle}
                  onChange={(e) =>
                    updateModuleTitle(moduleIndex, e.target.value)
                  }
                  required
                />

                <h3 className="font-semibold mb-2">Lectures</h3>

                {module.lectures.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className="border rounded-md p-3 bg-white mb-3">

                    <input
                      type="text"
                      placeholder="Lecture Title"
                      className="border px-3 py-2 rounded-md w-full mb-2"
                      value={lecture.title}
                      onChange={(e) =>
                        updateLecture(moduleIndex, lectureIndex, "title", e.target.value)
                      }
                      required
                    />

                    <input
                      type="text"
                      placeholder="Video URL"
                      className="border px-3 py-2 rounded-md w-full mb-2"
                      value={lecture.videoUrl}
                      onChange={(e) =>
                        updateLecture(moduleIndex, lectureIndex, "videoUrl", e.target.value)
                      }
                      required
                    />

                    <input
                      type="text"
                      placeholder="Lecture Thumbnail URL"
                      className="border px-3 py-2 rounded-md w-full mb-2"
                      value={lecture.thumbnail}
                      onChange={(e) =>
                        updateLecture(moduleIndex, lectureIndex, "thumbnail", e.target.value)
                      }
                    />

                    <input
                      type="text"
                      placeholder="Duration (10:20)"
                      className="border px-3 py-2 rounded-md w-full mb-2"
                      value={lecture.duration}
                      onChange={(e) =>
                        updateLecture(moduleIndex, lectureIndex, "duration", e.target.value)
                      }
                    />

                    <textarea
                      placeholder="Lecture Description"
                      className="border px-3 py-2 rounded-md w-full"
                      value={lecture.description}
                      onChange={(e) =>
                        updateLecture(moduleIndex, lectureIndex, "description", e.target.value)
                      }
                    ></textarea>

                  </div>
                ))}

                {/* Add Lecture Button */}
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md mt-2"
                  onClick={() => addLecture(moduleIndex)}
                >
                  + Add Lecture
                </button>
              </div>
            ))}

            {/* Add Module Button */}
            <button
              type="button"
              className="px-5 py-2 bg-purple-600 text-white rounded-md"
              onClick={addModule}
            >
              + Add Module
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
