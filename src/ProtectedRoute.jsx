import React from "react";
import { Navigate } from "react-router-dom";

// Wraps protected pages
export default function ProtectedRoute({ children }) {
  // Check if user token exists
  const token = localStorage.getItem("token");

  if (!token) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in → render children
  return children;
}
