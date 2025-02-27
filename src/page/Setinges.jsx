import React from "react";
import useDarkMode from "../store/useDarkMode";

const Settings = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();

    const handleDarkMode = (checked) => {
        if (checked) {
            toggleDarkMode();
        } else {
            toggleDarkMode(); // Call it again to toggle back
        }
    };

  return (
    <div className={`p-6 min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
    <h1 className="text-2xl font-semibold mb-6">⚙️ Sozlamalar</h1>

    <div className="flex items-center justify-between mb-6">
        <span className="text-lg">🌙 Qorong'u rejim</span>
        <input
            type="checkbox"
            checked={darkMode === "dark"}
            onChange={(e) => handleDarkMode(e.target.checked)}
            className="w-6 h-6 accent-blue-500 cursor-pointer"
        />
    </div>

    <div className="mb-4">Joriy rejim: {darkMode}</div>

    {/* Language Selection */}
    <div className="flex flex-col">
        <label className="text-lg mb-2">🌍 Tilni tanlang</label>
        <select
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
        >
            <option value="uz">O'zbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
        </select>
    </div>
</div>
  );
};

export default Settings;
