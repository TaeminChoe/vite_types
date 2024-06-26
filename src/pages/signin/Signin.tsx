import { useNavigate } from "react-router-dom";

import { authTypes } from "@/types";
import { ROLE_ADMIN, ROLE_USER } from "@/route/routes";

const Signin = () => {
  const nav = useNavigate();

  const handleOnClick = (permission: string) => {
    const auth: authTypes = {
      isAuth: true,
      permission,
    };
    localStorage.setItem("auth", JSON.stringify(auth));
    alert(`${permission}권한 로그인 완료`);

    if (permission === ROLE_USER) {
      nav(ROLE_USER);
    } else if (permission === ROLE_ADMIN) {
      nav(ROLE_ADMIN);
    }
  };
  return (
    <div>
      <div>
        <p>user permission</p>
        <button type="button" onClick={() => handleOnClick("user")}>
          user get
        </button>
      </div>
      <div>
        <p>admin permission</p>
        <button type="button" onClick={() => handleOnClick("admin")}>
          admin get
        </button>
      </div>
    </div>
  );
};

export default Signin;
