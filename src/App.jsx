import React, { Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

import RouteConfig, { AdminRouteConfig } from "./utils/RouteConfig";
import { AdminAuthContext } from "./context/AdminAuth";
import AdminNotFound from "./screens/admin/AdminNotFound";

const App = () => {
  const { authAdmin } = useContext(AdminAuthContext);

  return (
    <Routes>
      {RouteConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<Suspense fallback={<Loader />}>{route.component}</Suspense>}
        />
      ))}

      {authAdmin.isAuth ? (
        AdminRouteConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>{route.component}</Suspense>
            }
          >
            {route.children.map((child, index) => (
              <Route
                key={index}
                path={child.path}
                element={
                  <Suspense fallback={<Loader />}>{child.component}</Suspense>
                }
              />
            ))}
          </Route>
        ))
      ) : (
        <Route path="*" element={<AdminNotFound />} />
      )}
    </Routes>
  );
};

export default App;
