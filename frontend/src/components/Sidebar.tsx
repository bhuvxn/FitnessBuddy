import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="flex h-screen float-left shadow-xl">
      <div className="flex-shrink-0 bg-gray-800 w-64 rounded-r-lg shadow-xl">
        <nav className="mt-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Settings
          </a>
          <button
            onClick={HandleLogout}
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
