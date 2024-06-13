import { ProtectRouteTypes } from "@/types/routes";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ access }: ProtectRouteTypes) => {
  const loginMember = JSON.parse(localStorage.getItem("token") as string);

  if (loginMember.sort === access) return <Outlet />;
  else {
    if (loginMember.sort === "00") return <Navigate to="/management" />;
    else if (loginMember.sort === "01") return <Navigate to="/user" />;
    else return <Navigate to="/permission" />;
  }
};

export default ProtectRoute;
