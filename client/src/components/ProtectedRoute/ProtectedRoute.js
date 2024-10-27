import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ element: Element }) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        return <Element />;
      }
    } catch (error) {
      localStorage.removeItem("token");
    }
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
