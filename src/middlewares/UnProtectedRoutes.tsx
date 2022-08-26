import { useAuthContext } from "modules/auth/contexts/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import appMap from "routes/appMap";

const UnProtectedMiddleware: React.FC = () => {
  const [{ isAuthenticated }] = useAuthContext();
  return isAuthenticated ? <Navigate to={appMap.protected.home} /> : <Outlet />;
};

export default UnProtectedMiddleware;
