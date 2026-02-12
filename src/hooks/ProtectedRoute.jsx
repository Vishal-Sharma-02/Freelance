import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  // ⏳ Still verifying session
  if (user === undefined) {
    return null; // or loader
  }

  // ❌ Not logged in
  if (!user || !user.emailId) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;
