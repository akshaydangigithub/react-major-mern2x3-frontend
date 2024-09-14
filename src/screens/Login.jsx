import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { DataAuthContext } from "../context/UserAuth";
import axios from "../utils/axios";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { authUser, setAuthUser } = useContext(DataAuthContext);

  useEffect(() => {
    if (authUser.isAuth) {
      navigate("/user/dashboard");
    }
  }, [authUser]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/user/login", formData);

      // console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        setAuthUser({
          user: res.data.user,
          isAuth: true,
          token: res.data.token,
        });

        localStorage.setItem("userToken", res.data.token);
        navigate("/user/dashboard");

        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };


  console.log(authUser);

  return (
    <>
      <Navbar />

      <h1 className="text-center font-bold text-lg mt-20">Welcome Back</h1>

      <form onSubmit={handleLogin} className="max-w-lg mx-auto shadow-sm shadow-black rounded-xl py-3 px-6 mt-10">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            required
          />
        </div>

        <p>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>

        <button
          type="submit"
          className="mt-5 bg-black py-2 px-5 rounded-lg text-white"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default Login;
