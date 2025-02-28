import React from "react";
import Habibullo from "../assets/User.png";
import Chart from "../component/chart";
import datas from "../assets/data.json";
import Caunter from "./Caunter";
import useDarkMode from "../store/useDarkMode";
import useLanguageStore from "../store/useLanguageStore"; // Tilni olish uchun

function UserDanni() {
  const datal = datas[2];
  const data = datal[0];

  // console.log(data);

  const { darkMode } = useDarkMode();
  const { language } = useLanguageStore(); // Tanlangan tilni olish

  return (
    <div>
      <div
        className={`w-full  pb-10 p-4 max-w-5xl mx-auto rounded-lg flex flex-col  items-center gap-4 lg:gap-6 xl:gap-8 transition-colors duration-300 
    ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        {/* Profil rasmi */}
        <div className="w-full md:flex">
          <div className="flex items-center text-left w-full md:w-2/3   rounded-lg">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 mr-4">
              <img
                src={Habibullo || "https://via.placeholder.com/150"}
                alt={data?.name[language] || "User"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {data?.name[language]}
              </h2>
              <span
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-500"
                } text-sm md:text-base lg:text-lg block`}
              >
                {data?.fatherName[language]}
              </span>
            </div>
          </div>

          <div className="flex-1 md:w-1/2 flex justify-center items-center ">
            <Caunter />
          </div>
        </div>
        {/* Shaxsiy ma'lumotlar */}
        <div className="flex flex-col w-full  lg:w-3/4 gap-4">
          <div
            className={`border-t ${
              darkMode ? "border-gray-600" : "border-gray-300"
            } pt-4 w-full lg:w-3/4`}
          >
            <h3 className="text-lg lg:text-xl font-medium">
              Shaxsiy Ma'lumotlar
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              <span className="font-medium">Tug‘ilgan sana:</span>{" "}
              {data?.birthDate}
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              <span className="font-medium">Tug‘ilgan joyi:</span>{" "}
              {data?.birthPlace[language]}
            </p>
          </div>

          {/* Ko‘nikmalar */}
          <div
            className={`border-t md:w-2/4  ${
              darkMode ? "border-gray-600" : "border-gray-300"
            } pt-4 w-full lg:w-4/6`}
          >
            <h3 className="text-lg lg:text-xl font-medium">Ko‘nikmalar</h3>
            <p className="text-sm md:text-base lg:text-lg">
              {data?.skills[language].join(", ")}
            </p>
          </div>

          {/* Talabalik */}
          <div
            className={`border-t ${
              darkMode ? "border-gray-600" : "border-gray-300"
            } pt-4 w-full lg:w-4/5`}
          >
            <h3 className="text-lg lg:text-xl font-medium">Talabalik</h3>
            <p className="text-sm md:text-base lg:text-lg">
              {data?.education.institution[language]},{" "}
              {data?.education.direction[language]}, {data?.education.group}
            </p>
          </div>

         {/* Jismoniy parametrlari */}
<div className={`flex flex-col md:flex-row justify-between items-center shadow-lg rounded-2xl p-5 gap-4 
  ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white" : "bg-white text-gray-900"}`}>

  <div className="flex w-full gap-4">
    {/* Bo'yi */}
    <div className={`flex-1 flex flex-col items-center p-4 rounded-xl shadow-md w-full md:w-1/2 
      ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
      <span className="font-semibold text-lg">Boyi</span>
      <p className="text-xl font-bold">{data?.height} sm</p>
    </div>

    {/* Og'irligi */}
    <div className={`flex-1 flex flex-col items-center p-4 rounded-xl shadow-md w-full md:w-1/2 
      ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
      <span className="font-semibold text-lg">Og‘irligi</span>
      <p className="text-xl font-bold">{data?.weight} kg</p>
    </div>
  </div>

  {/* Grafik (Statistika) */}
  <div className={`flex-1 flex justify-center items-center p-4 rounded-xl shadow-md w-full md:w-1/3 
    ${darkMode ? "bg-gradient-to-r from-purple-700 to-blue-700" : "bg-gradient-to-r from-blue-500 to-purple-500"}`}>
    <Chart />
  </div>

</div>

        </div>
      </div>
    </div>
  );
}

export default UserDanni;
