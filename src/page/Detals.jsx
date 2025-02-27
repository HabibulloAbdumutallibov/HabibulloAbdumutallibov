import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini chaqiramiz

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode(); // Dark mode holatini olish
  const data = location.state?.value || {}; // 🔍 Jo‘natilgan `value` ni olish

  return (
    <div
      className={`container h-dvh mx-auto p-4 transition-colors duration-300 ${
        darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center">Oylik Tafsilotlar</h1>
      <div
        className={`shadow-md p-4 rounded-lg transition-colors duration-300 ${
          darkMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-semibold">{data.month || "Noma’lum"}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          O'zlashtirish: {data.progressPercentage || 0}%
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Izoh: {data.remarks || "Mavjud emas"}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          O'rganilgan mavzular: {data.topicsCovered?.join(", ") || "Mavjud emas"}
        </p>
      </div>
      <button
        onClick={() => navigate(-1)} // ⬅️ Orqaga qaytish
        className="mt-4 px-4 py-2 rounded transition-colors duration-300 
          bg-blue-500 text-white hover:bg-blue-600"
      >
        Orqaga
      </button>
    </div>
  );
}

export default Details;
