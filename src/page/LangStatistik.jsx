import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../assets/data.json";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini qo'shdik

const technologies = data[1] || [];

export default function TechSkills() {
  const [selectedTech, setSelectedTech] = useState(null);
  const { darkMode } = useDarkMode(); // Dark mode holatini olish

  function handleClick(tech) {
    setSelectedTech(tech);
  }

  function handleClose() {
    setSelectedTech(null);
  }

  if (!technologies.length) {
    return <p className="text-center text-red-500">Ma'lumot topilmadi!</p>;
  }

  return (
    <div
      className={`mb-10 h-dvh p-4 relative transition-colors duration-300 ${
        darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">O'zlashtirilgan tillar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            onClick={() => handleClick(tech)}
            className={`border p-2 rounded-lg flex flex-col gap-2 items-center shadow-md cursor-pointer transition-transform transform hover:scale-105 
              ${
                darkMode === "dark"
                  ? "bg-gray-800 text-white border-gray-700"
                  : "bg-white text-black border-gray-300"
              }
              ${selectedTech?.id === tech.id ? "border-blue-500" : ""}
            `}
          >
            <img src={tech.logo} alt={tech.technology} className="w-12 h-12 mb-2" />
            <p className="font-semibold">{tech.technology}</p>
          </div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: "10vh" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleClose} // Modal tashqarisini bosganda yopiladi
          >
            <div
              className={`w-full h-full md:w-2/3 lg:w-1/2 p-6 border rounded-lg shadow-md relative transition-colors duration-300 
                ${
                  darkMode === "dark"
                    ? "bg-gray-900 text-white border-gray-700"
                    : "bg-gray-100 text-black border-gray-300"
                }
              `}
              onClick={(e) => e.stopPropagation()} // Modal ichini bosganda yopilmasin
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                X
              </button>
              <h3 className="text-lg font-bold text-center">{selectedTech.technology}</h3>
              <img src={selectedTech.logo} alt={selectedTech.technology} className="w-20 h-20 mx-auto my-2" />
              <p className="text-center">Proficiency: {selectedTech.proficiency}%</p>
              <ul className="mt-4 text-sm text-left">
                {selectedTech.skills.map((skill, index) => (
                  <li key={index} className="list-disc ml-4">{skill}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
