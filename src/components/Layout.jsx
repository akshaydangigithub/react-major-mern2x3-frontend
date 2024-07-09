import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ head, desc, img, btn }) => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div
        className="h-[33rem] px-16 relative w-full flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-black/50 absolute top-0 left-0"></div>
        <h1 className="text-3xl font-bold text-white relative">{head}</h1>
        <p className="text-white relative text-center mt-5">{desc}</p>
        <button
          onClick={() => navigate(btn.link)}
          className="mt-5 py-3 px-7 bg-red-500 text-white font-semibold relative"
        >
          {btn.btnText}
        </button>
      </div>
    </div>
  );
};

export default Layout;
