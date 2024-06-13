import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";
import Login from "./pages/login/Login";
import LoginPrivateRoute from "./routes/LoginPrivateRoute";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectRoute from "./routes/ProtectRoute";

const Management = () => {
  return (
    <div>
      <h1>Management</h1>
      <Outlet />
    </div>
  );
};
const Admin = () => <h2>Admin</h2>;
const Register = () => <h2>Register</h2>;
const License = () => <h2>License</h2>;

const User = () => {
  return (
    <div>
      <h1>User</h1>
      <Outlet />
    </div>
  );
};
const UserAdmin = () => <h2>UserAdmin</h2>;
const UserRegister = () => <h2>UserRegister</h2>;
const UserAccount = () => <h2>UserAccount</h2>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPrivateRoute />}>
          <Route index element={<Login />} errorElement={<NotFound />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<ProtectRoute access={"00"} />}>
            <Route
              path="/management"
              element={<Management />}
              errorElement={<NotFound />}
            >
              <Route index element={<Admin />} errorElement={<NotFound />} />
              <Route
                path="/management/register"
                element={<Register />}
                errorElement={<NotFound />}
              />
              <Route
                path="/management/license"
                element={<License />}
                errorElement={<NotFound />}
              />
            </Route>
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<ProtectRoute access={"01"} />}>
            <Route path="/user" element={<User />} errorElement={<NotFound />}>
              <Route
                index
                element={<UserAdmin />}
                errorElement={<NotFound />}
              />
              <Route
                path="/user/register"
                element={<UserRegister />}
                errorElement={<NotFound />}
              />
              <Route
                path="/user/account"
                element={<UserAccount />}
                errorElement={<NotFound />}
              />
            </Route>
          </Route>
        </Route>

        {/* 정의되지 않은 URL접근시 Not found 페이지로 redirect */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
