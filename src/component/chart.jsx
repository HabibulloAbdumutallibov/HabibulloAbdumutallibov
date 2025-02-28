import React from "react";
import GaugeChart from "react-gauge-chart";
import useDarkMode from "../store/useDarkMode"; // Dark mode holatini olish
import data from "../assets/data.json";

const Speedometer = () => {
  const { darkMode } = useDarkMode(); // Dark mode ni tekshirish

  // Ma'lumotlarni to'g'ri o'qish
  const weight = data[2][0].weight;
  const height = data[2][0].height / 100; // Santimetrni metrgacha aylantirish

  // BMI hisoblash va normalizatsiya qilish
  const bmi = (weight / height ** 2).toFixed();
  const normalizedBmi = Math.min(bmi / 40, 1); // 40 ga bo‘lish orqali normalizatsiya

  console.log("Weight:", weight, "Height:", height, "BMI:", bmi);

  return (
    <div
      className={`flex flex-col justify-center items-center transition-colors duration-300 bg-transparent ${darkMode ? ' text-white' : 'text-black'}`}
    >
      <h1 className="text-2xl">Index</h1>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={30}
        colors={["#FF4500", "#FFD700", "#32CD32"]}
        arcWidth={0.3}
        percent={normalizedBmi}
        textColor={darkMode === "dark" ? "#FFF" : "#000"} // Dark mode uchun mos rang
      />
    </div>
  );
};

export default Speedometer;
