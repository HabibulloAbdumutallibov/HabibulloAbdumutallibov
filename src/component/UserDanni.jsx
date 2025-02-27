import React from "react";
import Habibullo from "../assets/User.png";
import Chart from "../component/chart";
import datas from "../assets/data.json";
import Caunter from "./Caunter";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini import qilish

function UserDanni() {
  const data1 = datas[2];
  const data = data1[0];
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  return (
    <div className={`w-full mb-10 p-4 max-w-3xl mx-auto rounded-lg flex flex-col md:flex-row items-center gap-2 transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center text-left w-full md:w-1/3 rounded-lg">
        {/* Profile Picture */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 mr-4">
          <img
            src={Habibullo || "https://via.placeholder.com/150"}
            alt={data?.name || "User"}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold">{data?.name || "Ism Familiya"}</h2>
          <span className="text-gray-400 text-sm md:text-base block">{data?.fatherName || "Otasining ismi"}</span>
        </div>
      </div>
      
      <div className="flex-1">
        <Caunter />
      </div>

      {/* Personal Information */}
      <div className="flex flex-col w-full md:w-2/3 gap-4">
        <div className="border-t border-gray-700 pt-4 w-3/4">
          <h3 className="text-lg font-medium">Shaxsiy Ma'lumotlar</h3>
          <p className="text-sm md:text-base">
            <span className="font-medium">Tug‘ilgan sana:</span> {data?.birthDate || "00.00.0000"}
          </p>
          <p className="text-sm md:text-base">
            <span className="font-medium">Tug‘ilgan joyi:</span> {data?.birthPlace || "Shahar, Viloyat"}
          </p>
        </div>

        {/* Skills and Education */}
        <div className="border-t border-gray-700 pt-4 w-4/6">
          <h3 className="text-lg font-medium">Ko‘nikmalar</h3>
          <p className="text-sm md:text-base">
            {data?.skills?.length ? data.skills.join(", ") : "Ma'lumot mavjud emas"}
          </p>
        </div>

        <div className="border-t border-gray-700 pt-4 w-4/5">
          <h3 className="text-lg font-medium">Talabalik</h3>
          <p className="text-sm md:text-base">
            {data?.education?.institution || "O‘quv markazi"}, {data?.education?.direction || "Yo‘nalish"}, {data?.education?.group || "Guruh"}
          </p>
        </div>

        {/* Physical Parameters */}
        <div className="flex justify-around items-start border-t border-gray-700 pt-4">
          {/* Height */}
          <div className="w-1/3 text-center border-b border-gray-700 pb-2">
            <span className="font-medium">Boyi</span>
            <p>{data?.height || "0"} sm</p>
          </div>

          {/* Chart Position */}
          <div className="w-1/3 border-b border-gray-700 flex justify-center items-center p-4 rounded-lg">
            <Chart />
          </div>

          {/* Weight */}
          <div className="w-1/3 text-center border-b border-gray-700 pb-2">
            <span className="font-medium">Og‘irligi</span>
            <p>{data?.weight || "0"} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDanni;
