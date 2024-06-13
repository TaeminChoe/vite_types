import { loginTokenExpiry } from "@/common/token";
import { Navigate, Outlet } from "react-router-dom";

/**
 *
 */
const LoginPrivateRoute = () => {
  const isAuthenticated = loginTokenExpiry();
  return isAuthenticated ? redirect() : <Outlet />;
};

export default LoginPrivateRoute;

const redirect = () => {
  const loginMember = JSON.parse(localStorage.getItem("token") as string);

  if (loginMember.sort === "00") return <Navigate to="/managment" />;
  else if (loginMember.sort === "01") return <Navigate to="/user" />;
  else return <Navigate to="/permission" />;
};
