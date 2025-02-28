import React, { useEffect, useState } from "react";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini import qilish
import data from "../assets/data.json";

function Natija() {
  const [count, setCount] = useState(0);
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  useEffect(() => {
    const progress = data[0].reduce(
      (acc, item) => acc + (item.progressPercentage > 0 ? 12.5 : 0),
      0
    );
    setCount(progress);
  }, []);

  return (
    <div
      className={`w-10/12 md:w-6/6 md:h-[80%] mx-auto mt-5 rounded-lg overflow-hidden shadow-lg flex items-end transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        style={{ width: `${count}%`, height: `${count}%` }}
        className="p-3 bg-gradient-to-r md:bg-gradient-to-t from-green-500 to-green-400 text-white font-semibold text-center transition-all duration-700 ease-out
          w-full md:w-full md:h-0"
      >
        {Math.round(count)}%
      </div>
    </div>
  );
}

export default Natija;
