import { useAuthContext } from "modules/auth/contexts/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedMiddleware: React.FC = () => {
  const [{ isAuthenticated }] = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedMiddleware;
