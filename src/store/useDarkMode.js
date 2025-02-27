import { create } from "zustand";

const useDarkMode = create((set) => ({
    darkMode: "light",
    toggleDarkMode: () => {
        set((state) => ({
            darkMode: state.darkMode === "dark" ? "light" : "dark",
        }));
    },
}));

export default useDarkMode;
