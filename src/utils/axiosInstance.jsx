import axios from "axios";
import { BASE_URL } from "./constants";
import { clearAuth } from "./authUtils";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const redirectToErrorPage = (message, details) => {
  if (window.location.pathname === "/error") {
    return;
  }

  const query = new URLSearchParams({
    message,
    details,
  }).toString();
  window.location.replace(`/error?${query}`);
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const requestUrl = error.config?.url || "";
    const isAuthRequest = requestUrl.includes("/auth/login") || requestUrl.includes("/auth/signup");

    if (!isAuthRequest) {
      if (error.response?.status === 401) {
        clearAuth();
        redirectToErrorPage(
          "Your session expired or is invalid.",
          "Please log in again. If this keeps happening, clear browser cache or site data."
        );
      } else if (!error.response || error.response.status >= 500) {
        redirectToErrorPage(
          "A server or network error occurred.",
          "Try again after clearing browser cache or site data."
        );
      }
    }

    return Promise.reject(error);
  }
);

export default api;
