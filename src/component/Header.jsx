import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaLanguage, FaPhone, FaCog, FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini import qilish

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Dark mode holatini olish va almashtirish

  return (
    <nav
      className={`fixed z-50 bottom-0 left-0 w-full p-3 flex justify-around items-center border-t transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-700"
      }`}
    >
      {/* Home */}
      <Link
        to="/"
        className={`flex flex-col items-center hover:text-blue-500 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </Link>

      {/* Statistika */}
      <Link
        to="/statistika"
        className={`flex flex-col items-center hover:text-blue-500 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <FaChartBar size={24} />
        <span className="text-xs">Statistika</span>
      </Link>

      {/* Language Statistika */}
      <Link
        to="/lang"
        className={`flex flex-col items-center hover:text-blue-500 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <FaLanguage size={24} />
        <span className="text-xs">Til</span>
      </Link>

      {/* Contact */}
      <Link
        to="/contact"
        className={`flex flex-col items-center hover:text-blue-500 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <FaPhone size={24} />
        <span className="text-xs">Kontakt</span>
      </Link>

      {/* Settings (Sozlamalar) */}
      <Link
        to="/settings"
        className={`flex flex-col items-center hover:text-blue-500 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <FaCog size={24} />
        <span className="text-xs">Sozlamalar</span>
      </Link>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`flex flex-col items-center hover:text-blue-500 focus:outline-none ${
          darkMode ? "text-yellow-400" : "text-gray-700"
        }`}
      >
        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        <span className="text-xs">Mode</span>
      </button>
    </nav>
  );
}

export default Header;
