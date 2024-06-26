import { URL_ADMIN_HOME, URL_LOUNGE, URL_USER_HOME } from "@/URL/url";

export const ROLE_USER = "user";
export const ROLE_ADMIN = "admin";

const routes = [
  {
    path: URL_USER_HOME,
    element: <>USER</>,
    permissions: [ROLE_USER],
  },
  {
    path: URL_ADMIN_HOME,
    element: <>ADMIN</>,
    permissions: [ROLE_ADMIN],
  },
  {
    path: URL_LOUNGE,
    element: <>LOUNGE</>,
    permissions: [ROLE_USER, ROLE_ADMIN],
  },
];

export default routes;
