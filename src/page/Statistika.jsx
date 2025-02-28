import React, { useState } from "react";
import datas from "../assets/data.json";
import GaugeChart from "react-gauge-chart";
import { useNavigate } from "react-router-dom";
import Natija from "../component/Natija";
import useDarkMode from "../store/useDarkMode";
import Grow from "@mui/material/Grow";

function Statistika() {
  const data = datas[0];
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const [checked, setChecked] = useState(true);

  function handleChartData(value) {
    navigate("/detals", { state: { value } });
  }

  return (
    <div
      className={` w-full md:w-2/3  rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        O'zlashtirish statistikasi
      </h1>
      <div className="flex flex-col p-2">
        {data.map((item, index) => (
          <Grow in={checked} key={index} timeout={index * 500 + 1000}>
            <div
              onClick={() => handleChartData(item)}
              className={`p-2  shadow-lg flex flex-row items-center cursor-pointer transform hover:scale-105 
                bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            >
              <div className="flex-grow">
                <h2 className="text-lg md:text-xl font-medium mb-2">{item.month}</h2>
                <p className="text-sm text-gray-500">O'zlashtirish darajasi: {item.progressPercentage}%</p>
              </div>
              <div className="w-22 h-22 flex justify-center items-center">
                <GaugeChart
                  id={`constitutional-awareness-chart-${index}`}
                  nrOfLevels={3}
                  colors={["#FF0000", "#FFFF00", "#00FF00"]}
                  arcWidth={0.2}
                  percent={Number("0." + item.progressPercentage)}
                  textColor={darkMode ? "#FFFFFF" : "#000000"}
                />
              </div>
            </div>
          </Grow>
        ))}

        <Natija />
      </div>
      <p className="text-center pb-10 text-gray-600 text-sm md:text-base mt-4">
        Ushbu bo‘limda men har oy o‘zlashtirgan bilimlarimni kuzatib boraman. Grafikalar 
        orqali o‘sish dinamikamni baholash va kelajakdagi rejalarga yo‘nalish berish 
        imkoniyatiga ega bo‘laman.
      </p>
    </div>
  );
}

export default Statistika;