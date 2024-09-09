import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextApi from "./context/ContextApi.jsx";
import { Toaster } from "react-hot-toast";
import AdminAuth from "./context/AdminAuth.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApi>
        <AdminAuth>
          <App />
          <Toaster />
        </AdminAuth>
      </ContextApi>
    </BrowserRouter>
  </React.StrictMode>
);
