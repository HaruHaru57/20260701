import React from "react";
import { Counter } from "./components/Counter";

// デフォルトで Server Component として動作
export default function HomePage() {
  const serverTime = new Date().toLocaleTimeString("ja-JP");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>⚡ Day 92: Server vs Client Components</h1>
      
      <div style={{ background: "#f3f4f6", padding: "12px", borderRadius: "8px" }}>
        <h3>🖥️ Server Component 領域</h3>
        <p>この部分はサーバー側で描画されます（JavaScriptが軽量化される）。</p>
        <p>サーバー生成時刻: {serverTime}</p>
      </div>

      {/* Client Component を読み込み */}
      <Counter />
    </div>
  );
}