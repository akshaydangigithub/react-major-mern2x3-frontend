import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "../../utils/axios";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../context/AdminAuth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { setAuthAdmin, authAdmin } = useContext(AdminAuthContext);
  // console.log(authAdmin);

  useEffect(() => {
    if (authAdmin.isAuth) {
      navigate("/admin/dashboard");
    }
  }, [authAdmin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/admin/login", formData);

      // console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        setAuthAdmin({
          admin: res.data.admin,
          isAuth: true,
          token: res.data.token,
        });

        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin/dashboard");

        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <h1 className="text-center font-bold text-lg mt-20">Admin Login</h1>

      <form
        onSubmit={handleLogin}
        className="max-w-lg mx-auto shadow-sm shadow-black rounded-xl py-3 px-6 mt-10"
      >
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            placeholder="name@flowbite.com"
            required
            value={formData.email}
            onChange={handleInputChange}
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     "
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="bg-black py-2 px-5 rounded-lg text-white"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default AdminLogin;
