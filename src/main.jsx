import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextApi from "./context/ContextApi.jsx";
import { Toaster } from "react-hot-toast";
import AdminAuth from "./context/AdminAuth.jsx";
import { BrowserRouter } from "react-router-dom";
import UserAuth from "./context/UserAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApi>
        <AdminAuth>
          <UserAuth>
            <App />
            <Toaster />
          </UserAuth>
        </AdminAuth>
      </ContextApi>
    </BrowserRouter>
  </React.StrictMode>
);
