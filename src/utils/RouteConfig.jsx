import { lazy } from "react";

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
];

export default RouteConfig;

const Wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
