import React, { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuth";
import Table from "./products/Table";

const Dashboard = () => {
  const { authAdmin } = useContext(AdminAuthContext);

  return (
    <>
      <h3 className="font-bold text-xl mb-7">Dashboard</h3>

      <div className="grid grid-cols-3 gap-5">
        <div className="shadow-sm flex items-center flex-col justify-center cursor-pointer transition-all duration-200 py-3 px-5 rounded-xl shadow-[#034062] hover:translate-x-1 hover:-translate-y-1">
          <h1 className="font-bold">Total Users</h1>
          <h2 className="font-medium">258K</h2>
        </div>
        <div className="shadow-sm flex items-center flex-col justify-center cursor-pointer transition-all duration-200 py-3 px-5 rounded-xl shadow-[#034062] hover:translate-x-1 hover:-translate-y-1">
          <h1 className="font-bold">Total Contacts</h1>
          <h2 className="font-medium">456</h2>
        </div>
        <div className="shadow-sm flex items-center flex-col justify-center cursor-pointer transition-all duration-200 py-3 px-5 rounded-xl shadow-[#034062] hover:translate-x-1 hover:-translate-y-1">
          <h1 className="font-bold">Total Orders</h1>
          <h2 className="font-medium">85</h2>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Dashboard;
