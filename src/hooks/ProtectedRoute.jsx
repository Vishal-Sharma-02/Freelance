import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const [verified, setVerified] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/profile/view`, {
          withCredentials: true,
        });
        if (res.data) setVerified(true);
      } catch (err) {
        setVerified(false);
      }
    };

    verify();
  }, []);

  // Show loader while verifying session
  if (verified === null) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-gray-600 text-sm">Checking authentication...</p>
      </div>
    );
  }

  // If backend or redux says "not authenticated"
  if (!user || verified === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
