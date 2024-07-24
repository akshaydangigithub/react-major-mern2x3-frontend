import { lazy } from "react";
import Details from "../screens/Details";

const Homepage = lazy(() => Wait().then(() => import("../screens/Homepage")));
const About = lazy(() => Wait().then(() => import("../screens/About")));
const Contact = lazy(() => Wait().then(() => import("../screens/Contact")));

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
    path: "/details",
    component: <Details />,
  },
];

export default RouteConfig;

const Wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
