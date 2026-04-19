import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clearAuth } from "../utils/authUtils";

const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const message = params.get("message") || "Something went wrong while loading the page.";
  const details =
    params.get("details") ||
    "Please try again after clearing browser cache or site data.";

  const handleReset = () => {
    clearAuth();
    window.localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-purple-200 bg-white p-10 shadow-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Oops! Something went wrong.</h1>
        <p className="mt-4 text-slate-600">{message}</p>
        <p className="mt-2 text-sm text-slate-500">{details}</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={handleReset}
            className="w-full rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Clear site data and go to login
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
