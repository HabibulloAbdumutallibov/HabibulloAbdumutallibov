import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini import qilish

const Layout = () => {
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  return (
    <div className={`container mx-auto pb-10 z-10 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Doimiy componentlar */}
      <div className="z-50">
        <Header />
      </div>
      {/* Sahifalar shu joyda yuklanadi */}
      <Outlet />
    </div>
  );
};

export default Layout;
