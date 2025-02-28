import { create } from "zustand";

const useDarkMode = create((set) => ({
  darkMode: localStorage.getItem("theme") === "dark", // Saqlangan holatni o'qish
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light"); // Holatni saqlash
      return { darkMode: newMode };
    }),
}));

export default useDarkMode;
