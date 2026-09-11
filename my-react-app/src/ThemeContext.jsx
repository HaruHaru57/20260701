    import { createContext, useState } from "react";

// 1. Context の箱を作成
export const ThemeContext = createContext();

// 2. データを全体に配る Provider（供給者）コンポーネントを作成
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // 'light' か 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}