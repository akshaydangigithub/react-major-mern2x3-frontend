import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <p className="text-xl">The page you are looking for does not exist.</p>
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <button
          onClick={() => navigate("/admin/login")}
          className="bg-black mt-4 py-2 px-4 rounded-lg text-white"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default AdminNotFound;
