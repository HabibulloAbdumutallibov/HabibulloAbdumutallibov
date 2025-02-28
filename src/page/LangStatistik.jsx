import React, { useState, useEffect } from "react";
import {  Fade } from "@mui/material";
import Grow from "@mui/material/Grow";

import data from "../assets/data.json";
import useDarkMode from "../store/useDarkMode";

const technologies = data[1] || [];

export default function TechSkills() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [animate, setAnimate] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setAnimate(true);
  }, []);

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
      className={`pb-10  relative transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">O'zlashtirilgan tillar</h2>
      <div className="flex flex-col mx-auto">
        {technologies.map((tech, index) => (
          <Grow key={tech.id} direction="left" in={animate} mountOnEnter unmountOnExit timeout={index * 300 + 500}>
            <div
              onClick={() => handleClick(tech)}
              className={`p-4 shadow cursor-pointer transition-transform transform hover:scale-105 flex items-center gap-3 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
            >
              <img src={tech.logo} alt={tech.technology} className="w-12 h-12" />
              <p className="font-semibold flex-grow">{tech.technology}</p>
            </div>
          </Grow>
        ))}
      </div>

      <Fade in={Boolean(selectedTech)} timeout={500}>
        <div
          className="fixed w-full  inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className={`w-full md:w-2/3 lg:w-1/2 p-6 rounded-xl shadow-md relative transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              X
            </button>
            <h3 className="text-lg font-bold text-center">{selectedTech?.technology}</h3>
            <img src={selectedTech?.logo} alt={selectedTech?.technology} className="w-20 h-20 mx-auto my-2" />
            <p className="text-center">Proficiency: {selectedTech?.proficiency}%</p>
            <ul className="mt-4 text-sm text-left">
              {selectedTech?.skills.map((skill, index) => (
                <li key={index} className="list-disc ml-4">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}
