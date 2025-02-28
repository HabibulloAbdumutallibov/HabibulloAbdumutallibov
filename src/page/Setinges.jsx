import React from "react";
import Select from "react-select";
import useDarkMode from "../store/useDarkMode";
import useLanguageStore from "../store/useLanguageStore";

const languageOptions = [
  { value: "uz", label: "🇺🇿 O'zbek" },
  { value: "ru", label: "🇷🇺 Русский" },
  { value: "en", label: "🇬🇧 English" },
];

const Settings = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, setLanguage, texts } = useLanguageStore();
 
  const texta = texts[4]
  const text = texta[0]
   
  return (
    <div className={`p-6 h-dvh ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-semibold mb-6">⚙️ {text.settings[language]}</h1>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg">🌙 {text.darkMode[language]}</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {/* Language Selection */}
      <div className="flex flex-col">
        <label className="text-lg mb-2">🌍 {text.selectLanguage[language]}</label>
        <Select
          options={languageOptions}
          className="basic-single text-black"
          classNamePrefix="select"
          isSearchable={false}
          value={languageOptions.find((opt) => opt.value === language)}
          onChange={(selected) => setLanguage(selected.value)}
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: darkMode ? "#1F2937" : "white",
              color: darkMode ? "white" : "black",
              borderColor: "#ccc",
            }),
            singleValue: (base) => ({
              ...base,
              color: darkMode ? "white" : "black",
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Settings;
