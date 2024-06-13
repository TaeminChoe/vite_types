import { Navigate, Outlet } from "react-router-dom";
import { loginTokenExpiry } from "@/common/token";

const PrivateRoute = () => {
  const isAuthenticated = loginTokenExpiry();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
