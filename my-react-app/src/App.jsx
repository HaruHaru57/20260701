import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

export function App() {
  const linkStyle = {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "bold"
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      {/* ナビゲーションバー */}
      <nav style={{ display: "flex", gap: "16px", marginBottom: "24px", borderBottom: "1px solid #ccc", paddingBottom: "12px" }}>
        <Link to="/" style={linkStyle}>
          ホーム
        </Link>
        <Link to="/about" style={linkStyle}>
          アバウト
        </Link>
      </nav>

      {/* URL パスに応じたコンポーネントの切替表示 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;