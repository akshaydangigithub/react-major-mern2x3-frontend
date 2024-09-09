import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AdminAuthContext = createContext(null);
import axios from "../utils/axios";
import toast from "react-hot-toast";

const AdminAuth = ({ children }) => {
  const [authAdmin, setAuthAdmin] = useState({
    admin: null,
    isAuth: false,
    token: null,
  });

  const navigate = useNavigate();

  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    if (adminToken) {
      checkToken();
    } else {
      setAuthAdmin({
        admin: null,
        isAuth: false,
        token: null,
      });
      localStorage.removeItem("adminToken");
    }
  }, [adminToken]);

  const checkToken = async () => {
    try {
      const res = await axios.post(
        "/admin/validateToken",
        {},
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

    //   console.log(res);

      if (res.data.success) {
        setAuthAdmin({
          isAuth: true,
          admin: res.data.admin,
          token: adminToken,
        });
      } else {
        setAuthAdmin({
          admin: null,
          isAuth: false,
          token: null,
        });
        localStorage.removeItem("adminToken");
      }
    } catch (error) {
      console.log(error);

      setAuthAdmin({
        admin: null,
        isAuth: false,
        token: null,
      });
      localStorage.removeItem("adminToken");
    }
  };

  useEffect(() => {
    // Listen for storage events to detect manual token removal
    const handleStorageChange = (event) => {
      if (event.key === "adminToken" && event.newValue === null) {
        setAuthAdmin({
          admin: null,
          isAuth: false,
          token: null,
        });
        toast.error("You are not authenticated");
        navigate("/admin/login");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [authAdmin.isAuth, navigate, setAuthAdmin]);

  const HandleLogout = () => {
    setAuthAdmin({
      admin: null,
      isAuth: false,
      token: null,
    });
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
    toast.success("LoggedOut Successfully");
  };

  return (
    <AdminAuthContext.Provider
      value={{ authAdmin, setAuthAdmin, HandleLogout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuth;
