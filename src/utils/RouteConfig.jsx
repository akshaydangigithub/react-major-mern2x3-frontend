import { lazy } from "react";
import Details from "../screens/Details";
import Dashboard from "../screens/admin/Dashboard";
import Link1 from "../screens/admin/Link1";
import AddProducts from "../screens/admin/products/AddProducts";
import AllProducts from "../screens/admin/products/AllProducts";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AdminLogin from "../screens/admin/AdminLogin";

const Homepage = lazy(() => Wait().then(() => import("../screens/Homepage")));
const About = lazy(() => Wait().then(() => import("../screens/About")));
const Contact = lazy(() => Wait().then(() => import("../screens/Contact")));
const AdminHome = lazy(() =>
  Wait().then(() => import("../screens/admin/AdminLayout"))
);

const RouteConfig = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/details/:id",
    component: <Details />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/admin/login",
    component: <AdminLogin />,
  },
];

const AdminRouteConfig = [
  {
    path: "/admin",
    component: <AdminHome />,
    children: [
      {
        path: "dashboard",
        component: <Dashboard />,
      },
      {
        path: "link1",
        component: <Link1 />,
      },
      {
        path: "product/add",
        component: <AddProducts />,
      },
      {
        path: "product/all",
        component: <AllProducts />,
      },
    ],
  },
];

export default RouteConfig;
export { AdminRouteConfig };

const Wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
