import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all shrink-0 duration-300 ease-out bg-[#034062]`}
      >
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto">
        <div className="flex items-center px-3 h-14 border-b border-gray-300">
          <MdMenu
            className="cursor-pointer text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
