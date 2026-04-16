import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { data: user, loading } = useSelector((state) => state.user);

  // ⏳ Still verifying session while no user exists yet
  if (loading && !user) {
    return <div>Loading...</div>; // or spinner
  }

  // ❌ Not logged in
  if (!user || !user.emailId) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;
