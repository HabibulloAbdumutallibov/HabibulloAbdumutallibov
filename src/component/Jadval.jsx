import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini import qilish
import data from "../assets/data.json";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ApiChart() {
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  const months = data[0].map((item) => item.month);
  const progressData = data[0].map((item) => item.progressPercentage);

  const [chartData] = useState({
    labels: months,
    datasets: [
      {
        label: "Ma’lumotlar",
        data: progressData,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  });

  return (
    <div
      className={`w-full mx-3 mt-10 p-4 rounded-lg shadow-md transition-colors duration-300 ${
        darkMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-xl font-semibold text-center mb-4">📊 O'zlashtirish Grafigi</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: darkMode === "dark" ? "#fff" : "#000", // Grafika matn rangi
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: darkMode === "dark" ? "#fff" : "#000",
              },
            },
            y: {
              ticks: {
                color: darkMode === "dark" ? "#fff" : "#000",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ApiChart;
