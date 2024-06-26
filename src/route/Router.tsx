import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import * as URL from "@/URL/url";
import routes from "./routes";
import { authTypes } from "@/types";

import Signin from "@/pages/signin/Signin";
import NotFound from "@/NotFound";

/**
 * Router 컴포넌트입니다.
 * @returns JSX.Element
 */
const Router = () => {
  const storage = localStorage.getItem("auth");
  const auth: authTypes = storage && JSON.parse(storage);

  return (
    <BrowserRouter>
      <Routes>
        {/* 앱 첫 진입시 Signin페이지로 이동 */}
        <Route index path="/" element={<Navigate to={URL.URL_SIGNIN} />} />

        {/* 로그인 권한에 따른 라우팅 세팅 */}
        {auth?.isAuth &&
          routes.map((route, key) => {
            if (auth?.isAuth) {
              const { permission } = auth;

              if (route.permissions.includes(permission)) {
                return (
                  <Route path={route.path} element={route.element} key={key} />
                );
              }
            }
          })}

        {/* 로그인 권한이 없을때만 접근 가능한 URL 라우팅 세팅 */}
        {!auth?.isAuth && (
          <>
            <Route path={URL.URL_SIGNIN} element={<Signin />} />
          </>
        )}

        {/* 로그인 권한 관계 없이 접근 가능한 URL 라우팅 세팅 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
