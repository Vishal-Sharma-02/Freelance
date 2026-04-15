import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { 
  fetchUsers as fetchUsersApi, 
  fetchCourses as fetchCoursesApi, 
  deleteUser as deleteUserApi, 
  deleteCourse as deleteCourseApi, 
  updateUser as updateUserApi,
  isUserAdmin 
} from "./adminUtils";
import AddCourse from "./AddCourse";

const AdminPanel = () => {
  const [active, setActive] = useState("users");
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Pagination states
  const [userPage, setUserPage] = useState(1);
  const [coursePage, setCoursePage] = useState(1);
  const [totalUserPages, setTotalUserPages] = useState(1);
  const [totalCoursePages, setTotalCoursePages] = useState(1);
  
  // Search states
  const [userSearch, setUserSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  
  // View states
  const [showAddCourse, setShowAddCourse] = useState(false);
  
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // Check if user is admin
  useEffect(() => {
    if (!isUserAdmin(user)) {
      navigate("/profile");
    }
  }, [user, navigate]);



  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchUsersApi(userPage, 10, userSearch);
      setUsers(data.users);
      setTotalUserPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [userPage, userSearch]);

  const loadCourses = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCoursesApi(coursePage, 10, courseSearch);
      setCourses(data.courses);
      setTotalCoursePages(data.totalPages);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, [coursePage, courseSearch]);

    // Fetch users with pagination and search
  useEffect(() => {
    if (active === "users") {
      loadUsers();
    }
  }, [active, loadUsers]);

  // Fetch courses with pagination and search
  useEffect(() => {
    if (active === "courses") {
      loadCourses();
    }
  }, [active, loadCourses]);

  const handleUserSearch = (e) => {
    setUserSearch(e.target.value);
    setUserPage(1);
  };

  const handleCourseSearch = (e) => {
    setCourseSearch(e.target.value);
    setCoursePage(1);
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourseApi(courseId);
        loadCourses();
      } catch (err) {
        console.error("Error deleting course:", err);
        alert("Failed to delete course");
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUserApi(userId);
        loadUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete user");
      }
    }
  };

  const [updatingUsers, setUpdatingUsers] = useState([]);

  const handleSubscriptionChange = async (userId, newSubscribed) => {
    try {
      setUpdatingUsers((s) => [...s, userId]);
      await updateUserApi(userId, { isSubscribed: newSubscribed });
      setUsers((prev) => prev.map((u) => (u._id === userId ? { ...u, subscribed: newSubscribed } : u)));
    } catch (err) {
      console.error("Failed to update subscription:", err);
      alert("Failed to update subscription");
    } finally {
      setUpdatingUsers((s) => s.filter((id) => id !== userId));
    }
  };

  if (showAddCourse) {
    return (
      <div>
        <button
          onClick={() => setShowAddCourse(false)}
          className="m-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          ← Back to Courses
        </button>
        <AddCourse onSuccess={() => {
          setShowAddCourse(false);
          loadCourses();
        }} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-linear-to-b from-gray-900 to-gray-800 text-white p-6 shadow-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Admin Panel</h2>
          <p className="text-gray-400 text-sm mt-1">Manage your platform</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => {
              setActive("users");
              setUserPage(1);
            }}
            className={`w-full p-4 text-left rounded-lg font-semibold transition ${
              active === "users"
                ? "bg-linear-to-r from-blue-600 to-blue-800 shadow-lg"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            👥 Users
          </button>

          <button
            onClick={() => {
              setActive("courses");
              setCoursePage(1);
            }}
            className={`w-full p-4 text-left rounded-lg font-semibold transition ${
              active === "courses"
                ? "bg-linear-to-r from-blue-600 to-blue-800 shadow-lg"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            📚 Courses
          </button>
        </nav>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 p-8 overflow-auto">
        {/* USERS SECTION */}
        {active === "users" && (
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Manage Users</h1>

            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={userSearch}
                onChange={handleUserSearch}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {loading ? (
                <div className="p-8 text-center">
                  <p className="text-lg text-gray-600">Loading users...</p>
                </div>
              ) : users.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-lg text-gray-600">No users found</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200 border-b-2 border-gray-300">
                      <th className="p-4 text-left font-bold text-gray-700">Name</th>
                      <th className="p-4 text-left font-bold text-gray-700">Email</th>
                      <th className="p-4 text-left font-bold text-gray-700">State</th>
                      <th className="p-4 text-left font-bold text-gray-700">Subscribed</th>
                      <th className="p-4 text-left font-bold text-gray-700">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((u, index) => (
                      <tr key={u._id || index} className="border-b hover:bg-gray-50 transition">
                        <td className="p-4">{u.fullName || "N/A"}</td>
                        <td className="p-4">{u.emailId || "N/A"}</td>
                        <td className="p-4">{u.state || "N/A"}</td>
                        <td className="p-4">
                          <select
                            value={u.subscribed ? "yes" : "no"}
                            onChange={(e) => handleSubscriptionChange(u._id, e.target.value === "yes")}
                            disabled={updatingUsers.includes(u._id)}
                            className={`px-3 py-1 rounded font-medium text-sm border ${
                              u.subscribed
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-red-100 text-red-800 border-red-200"
                            } ${updatingUsers.includes(u._id) ? "opacity-60 cursor-not-allowed" : ""}`}
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDeleteUser(u._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-semibold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center items-center gap-4">
              <button
                onClick={() => setUserPage(Math.max(1, userPage - 1))}
                disabled={userPage === 1}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
              >
                Previous
              </button>
              <span className="text-gray-700 font-semibold">
                Page {userPage} of {totalUserPages}
              </span>
              <button
                onClick={() => setUserPage(Math.min(totalUserPages, userPage + 1))}
                disabled={userPage === totalUserPages}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* COURSES SECTION */}
        {active === "courses" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-gray-800">Manage Courses</h1>
              <button
                onClick={() => setShowAddCourse(true)}
                className="px-6 py-3 bg-linear-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 shadow-lg transition"
              >
                + Add Course
              </button>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search courses by title or category..."
                value={courseSearch}
                onChange={handleCourseSearch}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>

            {/* Courses Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {loading ? (
                <div className="p-8 text-center">
                  <p className="text-lg text-gray-600">Loading courses...</p>
                </div>
              ) : courses.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-lg text-gray-600">No courses found</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200 border-b-2 border-gray-300">
                      <th className="p-4 text-left font-bold text-gray-700">Title</th>
                      <th className="p-4 text-left font-bold text-gray-700">Category</th>
                      <th className="p-4 text-left font-bold text-gray-700">Price</th>
                      <th className="p-4 text-left font-bold text-gray-700">Duration</th>
                      <th className="p-4 text-left font-bold text-gray-700">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {courses.map((course, index) => (
                      <tr key={course._id || index} className="border-b hover:bg-gray-50 transition">
                        <td className="p-4 font-semibold">{course.title || "N/A"}</td>
                        <td className="p-4">{course.category || "N/A"}</td>
                        <td className="p-4">₹{course.price || "Free"}</td>
                        <td className="p-4">{course.duration || "N/A"}</td>
                        <td className="p-4 space-x-2">
                          <button
                            onClick={() => navigate(`/editcourse/${course._id}`)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm font-semibold"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCourse(course._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-semibold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center items-center gap-4">
              <button
                onClick={() => setCoursePage(Math.max(1, coursePage - 1))}
                disabled={coursePage === 1}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
              >
                Previous
              </button>
              <span className="text-gray-700 font-semibold">
                Page {coursePage} of {totalCoursePages}
              </span>
              <button
                onClick={() => setCoursePage(Math.min(totalCoursePages, coursePage + 1))}
                disabled={coursePage === totalCoursePages}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
