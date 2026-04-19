// ============================================
// BACKEND AUTH CONTROLLER REFERENCE
// ============================================
// This shows how to properly structure your auth controller
// to work with the frontend and sendSuccess/sendError

import { sendSuccess, sendError } from "../utils/response.js";
import { 
  registerUser, 
  loginUser, 
  forgotPassword, 
  verifyOtp, 
  resetPassword 
} from "./authService.js";

// REGISTER - POST /auth/register
export const register = async (req, res) => {
  try {
    const { fullName, emailId, password, mobile, state, confirmEmail, confirmPassword } = req.body;

    // Validate inputs
    if (!fullName || !emailId || !password || !mobile || !state) {
      return sendError(res, "All fields are required", null, 400);
    }

    if (emailId !== confirmEmail) {
      return sendError(res, "Emails do not match", null, 400);
    }

    if (password !== confirmPassword) {
      return sendError(res, "Passwords do not match", null, 400);
    }

    // Call service function
    const result = await registerUser(
      { fullName, emailId, password, mobile, state },
      req.headers["user-agent"]
    );

    // Return with sendSuccess - wraps in { status, message, data }
    return sendSuccess(
      res,
      "Registration successful",
      result,
      201
    );
  } catch (err) {
    console.error("Register error:", err);
    return sendError(
      res,
      err.message || "Registration failed",
      null,
      err.statusCode || 500
    );
  }
};

// LOGIN - POST /auth/login
export const login = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    // Validate inputs
    if (!emailId || !password) {
      return sendError(res, "Email and password are required", null, 400);
    }

    // Call service function
    const result = await loginUser(
      { emailId, password },
      req.headers["user-agent"]
    );

    // Return with sendSuccess - wraps in { status, message, data }
    return sendSuccess(
      res,
      "Login successful",
      result,
      200
    );
  } catch (err) {
    console.error("Login error:", err);
    return sendError(
      res,
      err.message || "Login failed",
      null,
      err.statusCode || 500
    );
  }
};

// FORGOT PASSWORD - POST /auth/forgot-password
export const handleForgotPassword = async (req, res) => {
  try {
    const { emailId } = req.body;

    if (!emailId) {
      return sendError(res, "Email is required", null, 400);
    }

    const result = await forgotPassword(emailId);

    return sendSuccess(
      res,
      result.message,
      { email: emailId },
      200
    );
  } catch (err) {
    console.error("Forgot password error:", err);
    return sendError(
      res,
      err.message || "Failed to send OTP",
      null,
      err.statusCode || 500
    );
  }
};

// VERIFY OTP - POST /auth/verify-otp
export const handleVerifyOtp = async (req, res) => {
  try {
    const { emailId, otp } = req.body;

    if (!emailId || !otp) {
      return sendError(res, "Email and OTP are required", null, 400);
    }

    const result = await verifyOtp(emailId, otp);

    return sendSuccess(
      res,
      result.message,
      { email: emailId },
      200
    );
  } catch (err) {
    console.error("Verify OTP error:", err);
    return sendError(
      res,
      err.message || "OTP verification failed",
      null,
      err.statusCode || 500
    );
  }
};

// RESET PASSWORD - POST /auth/reset-password
export const handleResetPassword = async (req, res) => {
  try {
    const { emailId, newPassword } = req.body;

    if (!emailId || !newPassword) {
      return sendError(res, "Email and new password are required", null, 400);
    }

    const result = await resetPassword(emailId, newPassword);

    return sendSuccess(
      res,
      result.message,
      { email: emailId },
      200
    );
  } catch (err) {
    console.error("Reset password error:", err);
    return sendError(
      res,
      err.message || "Password reset failed",
      null,
      err.statusCode || 500
    );
  }
};

// LOGOUT - POST /auth/logout
export const logout = async (req, res) => {
  try {
    return sendSuccess(
      res,
      "Logged out successfully",
      null,
      200
    );
  } catch (err) {
    return sendError(
      res,
      "Logout failed",
      null,
      500
    );
  }
};

// ============================================
// KEY POINTS:
// ============================================
// 1. Always use sendSuccess() to wrap successful responses
// 2. Always use sendError() to wrap error responses
// 3. sendSuccess wraps data as: { status: "success", message, data }
// 4. sendError wraps data as: { status: "error", message, errors }
// 5. Frontend accesses data via res.data.data (or falls back to res.data)
// 6. Always pass the service function result directly to sendSuccess data parameter
