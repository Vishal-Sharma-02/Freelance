/**
 * Check if user has a valid authentication session
 * Validates both token in localStorage AND user data
 */
export const isAuthenticated = (user) => {
  const token = localStorage.getItem("token");
  return !!token && !!user?.emailId;
};

/**
 * Clear all authentication data
 * Removes token and Redux persist storage
 */
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("persist:root");
  localStorage.removeItem("persist:user");
};

/**
 * Get token from localStorage
 */
export const getToken = () => {
  return localStorage.getItem("token");
};

/**
 * Set token in localStorage
 */
export const setToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};
