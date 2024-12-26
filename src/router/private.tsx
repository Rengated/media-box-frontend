import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute component
const PrivateRoute = ({ element: Element }: { element: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return Element;
};

export default PrivateRoute;
