import React from "react";

const Pulses = () => {
  return (
    <>
      {/* create a loader using animate-pulse animation of tailwind */}

      <div className="flex flex-col space-y-4 mt-10">
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-10 animate-pulse"></div>
      </div>
    </>
  );
};

export default Pulses;
