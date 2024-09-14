import React, { createContext, useEffect, useState } from "react";
export const DataAuthContext = createContext(null);
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserAuth = (props) => {
  const [authUser, setAuthUser] = useState({
    user: null,
    isAuth: false,
    token: null,
  });

  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    if (userToken) {
      checkToken();
    } else {
      setAuthUser({
        user: null,
        isAuth: false,
        token: null,
      });
      localStorage.removeItem("userToken");
    }
  }, [userToken]);

  const checkToken = async () => {
    try {
      const res = await axios.post(
        "/user/validateToken",
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      // console.log(res);

      if (res.data.success) {
        setAuthUser({
          isAuth: true,
          user: res.data.user,
          token: userToken,
        });
      } else {
        setAuthUser({
          user: null,
          isAuth: false,
          token: null,
        });
        localStorage.removeItem("userToken");
      }
    } catch (error) {
      console.log(error);

      setAuthUser({
        user: null,
        isAuth: false,
        token: null,
      });
      localStorage.removeItem("userToken");
    }
  };

  useEffect(() => {

    // Listen for storage events to detect manual token removal
    const handleStorageChange = (event) => {
      if (event.key === "userToken" && event.newValue === null) {
        setAuthUser({
          user: null,
          isAuth: false,
          token: null,
        });
        toast.error("You are not authenticated");
        navigate("/");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [authUser.isAuth, navigate, setAuthUser]);

  const HandleLogout = () => {
    setAuthUser({
      user: null,
      isAuth: false,
      token: null,
    });
    localStorage.removeItem("userToken");
    navigate("/");
    toast.success("LoggedOut Successfully");
  };
  return (
    <DataAuthContext.Provider value={{ authUser, setAuthUser, HandleLogout }}>
      {props.children}
    </DataAuthContext.Provider>
  );
};

export default UserAuth;
