import React, { createContext, useContext, useState, ReactNode } from "react";

// ① Context で共有するデータの型定義
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// ② Context の生成（初期値は undefined）
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ③ Provider の Props 型定義（children を受け取る）
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ④ カスタムフック作成（Provider 外で使用された場合のエラーハンドリング）
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme は ThemeProvider の内部で使用してください");
  }
  return context;
};