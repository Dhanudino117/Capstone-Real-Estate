import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = Boolean(localStorage.getItem("token")); // Check if the user is logged in

  if (!isLoggedIn) {
    return <Navigate to="/auth-details" replace />;
  }

  return children;
};

export default ProtectedRoute;