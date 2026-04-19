import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if token exists in localStorage
  const token = localStorage.getItem("token");

  // Not logged in - redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Logged in - render the protected com ponent
  return children;
};

export default ProtectedRoute;
