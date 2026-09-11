import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeToggle() {
  // ThemeContext から直接 theme と toggleTheme を取り出す
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: "20px",
      borderRadius: "8px",
      marginTop: "16px",
      backgroundColor: theme === "light" ? "#ffffff" : "#1f2937",
      color: theme === "light" ? "#111827" : "#f9fafb",
      border: "1px solid #ccc",
      transition: "all 0.3s ease"
    }}>
      <p>現在のモード: <strong>{theme === "light" ? "☀️ ライト" : "🌙 ダーク"}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: theme === "light" ? "#3b82f6" : "#10b981",
          color: "white"
        }}
      >
        テーマを切り替える
      </button>
    </div>
  );
}