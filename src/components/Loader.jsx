import React from "react";

const Loader = () => {
  return (
    <>
      <button className="bg-indigo-500 text-white py-2 px-5 rounded-xl mx-auto block m-3">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 border-2 rounded-full border-gray-200 border-l-black animate-spin"></div>
          Loading...
        </div>
      </button>
    </>
  );
};

export default Loader;
