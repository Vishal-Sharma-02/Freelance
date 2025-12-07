import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants.jsx";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch course on mount
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${BASE_URL}course/${id}`);
        setCourse(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p className="text-center text-lg mt-20">Loading...</p>;
  if (!course) return <p className="text-center text-lg mt-20">Course not found</p>;

  // Update main course fields
  const updateField = (field, value) => {
    setCourse({ ...course, [field]: value });
  };

  // Update module title
  const updateModuleTitle = (moduleIndex, value) => {
    const updated = [...course.modules];
    updated[moduleIndex].moduleTitle = value;
    setCourse({ ...course, modules: updated });
  };

  // Add new module
  const addModule = () => {
    setCourse({
      ...course,
      modules: [...course.modules, { moduleTitle: "", lectures: [] }],
    });
  };

  // Remove module
  const removeModule = (moduleIndex) => {
    const updated = course.modules.filter((_, i) => i !== moduleIndex);
    setCourse({ ...course, modules: updated });
  };

  // Add lecture to module
  const addLecture = (moduleIndex) => {
    const updated = [...course.modules];
    updated[moduleIndex].lectures.push({
      title: "",
      videoUrl: "",
      thumbnail: "",
      duration: "",
      description: "",
    });
    setCourse({ ...course, modules: updated });
  };

  // Remove lecture
  const removeLecture = (moduleIndex, lectureIndex) => {
    const updated = [...course.modules];
    updated[moduleIndex].lectures = updated[moduleIndex].lectures.filter(
      (_, i) => i !== lectureIndex
    );
    setCourse({ ...course, modules: updated });
  };

  // Update lecture field
  const updateLecture = (moduleIndex, lectureIndex, field, value) => {
    const updated = [...course.modules];
    updated[moduleIndex].lectures[lectureIndex][field] = value;
    setCourse({ ...course, modules: updated });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/course/update/${course._id}`,
        course,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Course updated successfully!");
      console.log(res.data);

      navigate(`/course/${course._id}`);
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Course</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="font-semibold">Course Title</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.title}
              onChange={(e) => updateField("title", e.target.value)}
              required
            />
          </div>

          {/* SHORT DESCRIPTION */}
          <div>
            <label className="font-semibold">Short Description</label>
            <textarea
              className="w-full border px-4 py-2 rounded-md mt-1"
              maxLength="200"
              value={course.shortDescription}
              onChange={(e) => updateField("shortDescription", e.target.value)}
              required
            />
          </div>

          {/* FULL DESCRIPTION */}
          <div>
            <label className="font-semibold">Full Description</label>
            <textarea
              rows="6"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.fullDescription}
              onChange={(e) => updateField("fullDescription", e.target.value)}
              required
            />
          </div>

          {/* COURSE THUMBNAIL */}
          <div>
            <label className="font-semibold">Course Thumbnail URL</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.thumbnail}
              onChange={(e) => updateField("thumbnail", e.target.value)}
              required
            />
          </div>

          {/* TRAILER VIDEO */}
          <div>
            <label className="font-semibold">Trailer Video URL</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.trailerVideo}
              onChange={(e) => updateField("trailerVideo", e.target.value)}
            />
          </div>

          {/* TRAILER THUMBNAIL */}
          <div>
            <label className="font-semibold">Trailer Thumbnail URL</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.trailerThumbnail}
              onChange={(e) => updateField("trailerThumbnail", e.target.value)}
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="font-semibold">Price (₹)</label>
            <input
              type="number"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.price}
              onChange={(e) => updateField("price", e.target.value)}
              required
            />
          </div>

          {/* DURATION */}
          <div>
            <label className="font-semibold">Course Duration</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md mt-1"
              value={course.duration}
              onChange={(e) => updateField("duration", e.target.value)}
              required
            />
          </div>

          {/* MODULES SECTION */}
          <h2 className="text-2xl font-semibold mt-8 mb-3">Modules</h2>

          {course.modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="border p-4 rounded-lg bg-gray-50 mb-5">

              {/* MODULE TITLE */}
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  className="border px-4 py-2 rounded-md w-full mr-4"
                  value={module.moduleTitle}
                  onChange={(e) => updateModuleTitle(moduleIndex, e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={() => removeModule(moduleIndex)}
                >
                  Remove
                </button>
              </div>

              {/* LECTURES */}
              <h3 className="font-semibold mt-4 mb-2">Lectures</h3>

              {module.lectures.map((lecture, lectureIndex) => (
                <div key={lectureIndex} className="border rounded-md p-3 bg-white mb-3">

                  <div className="flex justify-between">
                    <h4 className="font-semibold">Lecture {lectureIndex + 1}</h4>
                    <button
                      type="button"
                      className="text-red-600"
                      onClick={() => removeLecture(moduleIndex, lectureIndex)}
                    >
                      Remove
                    </button>
                  </div>

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

              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md mt-2"
                onClick={() => addLecture(moduleIndex)}
              >
                + Add Lecture
              </button>
            </div>
          ))}

          {/* ADD MODULE BUTTON */}
          <button
            type="button"
            className="px-5 py-2 bg-purple-600 text-white rounded-md"
            onClick={addModule}
          >
            + Add Module
          </button>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
