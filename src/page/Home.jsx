import React from "react";
import UserDanni from "../component/UserDanni";
import useDarkMode from "../store/useDarkMode"; // Dark mode holatini import qilish

function Home() {
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  return (
    <div className={`container mx-auto transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <UserDanni />
    </div>
  );
}

export default Home;
