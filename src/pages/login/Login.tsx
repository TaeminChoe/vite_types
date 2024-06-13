import React from "react";
import { useNavigate } from "react-router-dom";
import { makeLoginToken } from "@/common/token";

const Login: React.FC = () => {
  const nav = useNavigate();

  const handleAdminLogin = () => {
    // admin 로그인 기능을 처리하는 핸들러
    makeLoginToken(
      {
        tokenKeyName: "token",
        keyValue: "토큰",
        userName: "관리자 계정",
        sort: "00",
      },
      5000
    );
    nav("/management");
  };

  const handleUserLogin = () => {
    // user 로그인 기능을 처리하는 핸들러
    makeLoginToken({
      tokenKeyName: "token",
      keyValue: "토큰",
      userName: "사용자 계정",
      sort: "01",
    });
    nav("/user");
  };

  return (
    <div className="page-container">
      <h1>Login</h1>
      <div className="button-container">
        <button className="login-button" onClick={handleAdminLogin}>
          Admin Login
        </button>
        <button className="login-button" onClick={handleUserLogin}>
          User Login
        </button>
      </div>
    </div>
  );
};

export default Login;
