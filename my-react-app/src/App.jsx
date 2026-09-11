import { ThemeProvider } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "24px", maxWidth: "500px", margin: "0 auto", fontFamily: "sans-serif" }}>
        <h1>🌐 Day 73: Context API（状態の共通管理）</h1>
        <p>Props でバケツリレーせずに、どこからでもテーマ情報を共有できます。</p>
        
        {/* 子コンポーネント */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;