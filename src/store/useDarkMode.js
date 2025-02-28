import { create } from "zustand";

const useDarkMode = create((set) => {
  // Saqlangan holatni o‘qish
  const savedTheme = localStorage.getItem("theme") === "dark";
  const savedLanguage = localStorage.getItem("language") || "uz";

  // body fon rangini yangilash
  if (savedTheme) {
    document.body.style.backgroundColor = "#111827"; // Dark mode
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#ffffff"; // Light mode
    document.body.style.color = "#111827";
  }

  return {
    darkMode: savedTheme,
    language: savedLanguage,

    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.darkMode;
        localStorage.setItem("theme", newMode ? "dark" : "light");

        // Body fonini o‘zgartirish
        document.body.style.backgroundColor = newMode ? "#111827" : "#ffffff";
        document.body.style.color = newMode ? "#ffffff" : "#111827";

        return { darkMode: newMode };
      }),
  };
});

export default useDarkMode;
