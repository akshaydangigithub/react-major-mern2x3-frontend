import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { AdminAuthContext } from "../../context/AdminAuth";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { HandleLogout } = useContext(AdminAuthContext);

  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Link1",
      path: "/admin/link1",
    },
    {
      name: "Products",
      path: "#",
      isDropdown: true,
      children: [
        {
          name: "Add Products",
          path: "/admin/product/add",
        },
        {
          name: "All Products",
          path: "/admin/product/all",
        },
      ],
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center h-14 border-b border-[#0a3046]">
        <h1 className="text-white text-lg">Admin Panel</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="flex flex-col py-4 space-y-1">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              {link.isDropdown ? (
                <>
                  <div
                    className={`px-6 py-3 flex items-center justify-between cursor-pointer text-gray-100 $`}
                    onClick={toggleDropdown}
                  >
                    <span className="flex-grow">{link.name}</span>
                    {dropdownOpen ? (
                      <MdKeyboardArrowUp className="text-xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-xl" />
                    )}
                  </div>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      dropdownOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    {link.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            `px-10 py-3 block ${
                              isActive
                                ? "bg-[#0a3046] text-white"
                                : "text-gray-100"
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-6 py-3 flex items-center ${
                      isActive ? "bg-[#0a3046] text-white" : "text-gray-100"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={HandleLogout}
        className="flex gap-3 items-center justify-center h-14 border-t text-white cursor-pointer border-[#0a3046]"
      >
        <IoLogOutOutline className="text-xl" /> Logout
      </div>
    </div>
  );
};

export default Sidebar;
