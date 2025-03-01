import React, { useState } from "react";
import datas from "../assets/data.json";
import GaugeChart from "react-gauge-chart";
import { useNavigate } from "react-router-dom";
import Natija from "../component/Natija";
import useDarkMode from "../store/useDarkMode";
import useLanguageStore from "../store/useLanguageStore";
import Grow from "@mui/material/Grow";

function Statistika() {
  const data = datas[0]; // JSON-dan kelayotgan ma'lumotlar
  console.log(data);
  
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguageStore();
  const [checked, setChecked] = useState(true);

  function handleChartData(value) {
    navigate("/detals", { state: { value } });
  }

  return (
<div className="flex flex-col md:flex-row items-start md:items-end pb-10 justify-center gap-10 relative">
  <div
    className={`w-full md:w-2/3 rounded-lg shadow-md transition-colors duration-300 ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
    }`}
  >
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
      {language === "uz"
        ? "O'zlashtirish statistikasi"
        : language === "ru"
        ? "Статистика успеваемости"
        : "Learning Statistics"}
    </h1>

    <div className="flex flex-col p-2">
      {data.map((item, index) => (
        <Grow in={checked} key={index} timeout={index * 500 + 1000}>
          <div
            onClick={() => handleChartData(item)}
            className={`p-4 shadow-lg flex flex-row items-center cursor-pointer transform hover:scale-101 
              bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
              }`}
          >
            <div className="flex-grow">
              <h2 className="text-lg font-medium mb-2">{item.month[language]}</h2>
              <p className="text-sm text-gray-500">
                {language === "uz"
                  ? "O'zlashtirish darajasi"
                  : language === "ru"
                  ? "Уровень освоения"
                  : "Learning rate"}
                : {item.progressPercentage}%
              </p>
              <p className="text-sm italic text-gray-400">{item.remarks[language]}</p>
            </div>
            <div className="w-24 h-24 flex justify-center items-center">
              <GaugeChart
                id={`chart-${index}`}
                nrOfLevels={3}
                colors={["#FF0000", "#FFFF00", "#00FF00"]}
                arcWidth={0.2}
                percent={item.progressPercentage / 100}
                textColor={darkMode ? "#FFFFFF" : "#000000"}
              />
            </div>
          </div>
        </Grow>
      ))}
    </div>
  </div>

  {/* Natija komponentini desktopda o'ng tomonga joylashtirish */}
  <div className="md:w-1/3 md:max-w-xs md:fixed">
    <Natija />
  </div>
</div>

  );
}

export default Statistika;
