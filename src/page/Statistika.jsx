import React from "react";
import datas from "../assets/data.json";
import GaugeChart from "react-gauge-chart";
import { useNavigate } from "react-router-dom";
import Natija from "../component/Natija";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini chaqiramiz

function Statistika() {
  const data = datas[0];
  const navigate = useNavigate();
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  function hendalChartData(value) {
    navigate("/detals", { state: { value } });
  }

  return (
    <div
      className={`h-dvh w-full md:w-2/3 rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        O'zlashtirish statistikasi
      </h1>
      <div className="flex flex-wrap justify-center gap-1">
        {data.map((item, index) => (
          <div
            onClick={() => hendalChartData(item)}
            key={index}
            className={`p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer transform hover:scale-105 
              bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
  style={{ width: "23.08%" }} // 3/13 ≈ 23.08%
         
          >
            <h2 className="text-lg md:text-xl font-medium mb-2">{item.month}</h2>
            <div className="w-full flex justify-center">
              <GaugeChart
                id={`constitutional-awareness-chart-${index}`}
                nrOfLevels={3}
                colors={["#FF0000", "#FFFF00", "#00FF00"]}
                arcWidth={0.2}
                percent={Number("0." + item.progressPercentage)}
                textColor={darkMode === "dark" ? "#FFFFFF" : "#000000"} // Matn rangi dark mode uchun o'zgartirildi
              />
            </div>
          </div>
        ))}

        <Natija />

      </div>
      <p className="text-center text-gray-600 text-sm md:text-base mt-4">
        Ushbu bo‘limda men har oy o‘zlashtirgan bilimlarimni kuzatib boraman. Grafikalar 
        orqali o‘sish dinamikamni baholash va kelajakdagi rejalarga yo‘nalish berish 
        imkoniyatiga ega bo‘laman.
      </p>
    </div>
  );
}

export default Statistika;
