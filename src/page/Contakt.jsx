import React, { useState } from "react";
import useDarkMode from "../store/useDarkMode"; // Dark mode hookini chaqiramiz

const ContactComponent = () => {
  const { darkMode } = useDarkMode(); // Dark mode holatini olish
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form yuborildi!");
  };

  return (
    <div
      className={` h-dvh max-w-md mx-auto p-6 shadow-lg rounded-lg mt-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Biz bilan bog'laning
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm transition-colors duration-300"
          >
            Ismingiz
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`mt-2 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-400"
                : "border-gray-300 bg-white text-black focus:ring-blue-500"
            }`}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm transition-colors duration-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-2 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-400"
                : "border-gray-300 bg-white text-black focus:ring-blue-500"
            }`}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm transition-colors duration-300"
          >
            Xabar
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`mt-2 block w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-400"
                : "border-gray-300 bg-white text-black focus:ring-blue-500"
            }`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        >
          Yuborish
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm">Yoki quyidagi platformalarda menga yozing:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="tel:+998331693608"
            className="text-blue-500 hover:underline transition-colors duration-300"
          >
            Telefon
          </a>
          <a
            href="https://t.me/habibullox000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-colors duration-300"
          >
            Telegram
          </a>
          <a
           href="https://instagram.com/habibullo_0311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
