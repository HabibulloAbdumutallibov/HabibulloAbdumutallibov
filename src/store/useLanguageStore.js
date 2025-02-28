import { create } from "zustand";

// JSON-dan keladigan tarjimalarni import qilamiz
import translations from "../assets/data.json";

const useLanguageStore = create((set) => ({
  language: localStorage.getItem("language") || "uz",
  texts: translations, // Barcha tarjimalar
  setLanguage: (lang) =>
    set(() => {
      localStorage.setItem("language", lang);
      return { language: lang };
    }),
}));

export default useLanguageStore;
