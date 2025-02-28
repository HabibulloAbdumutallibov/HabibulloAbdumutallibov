import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini chaqiramiz

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode(); // Dark mode holatini olish
  const data = location.state?.value || {}; // 🔍 Jo‘natilgan `value` ni olish

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Orqaga
      </button>

      <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-opacity-75">
        <h2 className="text-xl font-bold mb-2">{data.month?.uz}</h2>
        <p className="text-gray-600">{data.progressPercentage}% progress</p>

        <div className="mt-4">
          <h3 className="font-semibold">Izoh:</h3>
          <p>{data.remarks?.uz}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">O‘rganilgan mavzular:</h3>
          <ul className="list-disc list-inside">
            {data.topicsCovered?.uz?.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
