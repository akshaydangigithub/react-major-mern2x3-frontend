import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />

      <h1 className="text-center font-bold text-lg mt-20">Welcome Back</h1>

      <form className="max-w-lg mx-auto shadow-sm shadow-black rounded-xl py-3 px-6 mt-10">
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
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
