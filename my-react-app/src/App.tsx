import { ThemeProvider } from "./ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}>
        <h1>Day 87 - useContext の型定義</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;