import api from "../utils/axiosInstance";

// Fetch all users with pagination and search
export const fetchUsers = async (page = 1, limit = 10, search = "") => {
  try {
    const res = await api.get("/user", {
      params: {
        page,
        limit,
        search
      },
    });
    return {
      users: res?.data?.data?.users || [],
      totalPages: res?.data?.data?.totalPages || 1,
      currentPage: page,
    };
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error(err.response?.data?.message || "Failed to fetch users");
  }
};

// Fetch all courses with pagination and search
export const fetchCourses = async (page = 1, limit = 10, search = "") => {
  try {
    const res = await api.get("/course", {
      params: {
        page,
        limit,
        search,
      },
    });
    console.log("Fetched courses:", res?.data?.data);
    return {
      courses: res?.data?.data || [],
      totalPages: res?.data?.data?.totalPages || 1,
      currentPage: page,
    };
  } catch (err) {
    console.error("Error fetching courses:", err);
    throw new Error(err.response?.data?.message || "Failed to fetch courses");
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const res = await api.delete(`/users/${userId}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw new Error(err.response?.data?.message || "Failed to delete user");
  }
};

// Update user's subscription or other fields (admin)
export const updateUser = async (userId, data) => {
  console.log("Updating user:", userId, data.isSubscribed);
  try {
    const res = await api.patch(`/user/update/${userId}`, {isSubscribed: data.isSubscribed});
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err);
    throw new Error(err.response?.data?.message || "Failed to update user");
  }
};

// Delete a course
export const deleteCourse = async (courseId) => {
  try {
    const res = await api.delete(`/course/${courseId}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting course:", err);
    throw new Error(err.response?.data?.message || "Failed to delete course");
  }
};

// Create a new course
export const createCourse = async (courseData) => {
  try {
    const res = await api.post("/course/create", courseData);
    return res.data;
  } catch (err) {
    console.error("Error creating course:", err);
    throw new Error(err.response?.data?.message || "Failed to create course");
  }
};

// Update a course
export const updateCourse = async (courseId, courseData) => {
  try {
    const res = await api.put(`/course/edit/${courseId}`, courseData);
    return res.data;
  } catch (err) {
    console.error("Error updating course:", err);
    throw new Error(err.response?.data?.message || "Failed to update course");
  }
};

// Fetch a single course
export const fetchCourseById = async (courseId) => {
  try {
    const res = await api.get(`/course/${courseId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching course:", err);
    throw new Error(err.response?.data?.message || "Failed to fetch course");
  }
};

// Check if user is admin
export const isUserAdmin = (user) => {
  return user?.role === "admin";
};

// Export all functions as default
export default {
  fetchUsers,
  fetchCourses,
  deleteUser,
  deleteCourse,
  createCourse,
  updateCourse,
  fetchCourseById,
  isUserAdmin,
};
