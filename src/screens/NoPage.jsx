import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-3xl">404 No Page Found</h1>

      {/* <Link to="/">
        <button className="mt-5 py-2 px-7 bg-red-500 text-white font-semibold">
          Go to Homepage
        </button>
      </Link> */}
      <button
        onClick={handlenavigate}
        className="mt-5 py-2 px-7 bg-red-500 text-white font-semibold"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NoPage;
