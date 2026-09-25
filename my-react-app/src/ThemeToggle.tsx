import React from "react";
import { useTheme } from "./ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: isDark ? "#333" : "#f0f0f0",
        color: isDark ? "#fff" : "#333",
        transition: "all 0.3s ease",
      }}
    >
      <h3>現在のテーマ: {theme}</h3>
      <button onClick={toggleTheme} style={{ padding: "8px 16px", cursor: "pointer" }}>
        テーマを切り替える
      </button>
    </div>
  );
};