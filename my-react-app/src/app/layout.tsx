import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      {/* 共通ヘッダー */}
      <header style={{ padding: "16px", background: "#1e293b", color: "#fff", borderRadius: "8px 8px 0 0" }}>
        <h2 style={{ margin: 0 }}>🌐 My Next.js App</h2>
        <nav style={{ marginTop: "8px" }}>
          <a href="/" style={{ color: "#38bdf8", marginRight: "12px" }}>Top</a>
          <a href="/users/1" style={{ color: "#38bdf8", marginRight: "12px" }}>User 1</a>
          <a href="/users/2" style={{ color: "#38bdf8" }}>User 2</a>
        </nav>
      </header>

      {/* 各ページコンテンツが入る部分 */}
      <main style={{ padding: "20px", border: "1px solid #cbd5e1", borderRadius: "0 0 8px 8px" }}>
        {children}
      </main>
    </div>
  );
}