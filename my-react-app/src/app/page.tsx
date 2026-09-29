import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🏠 トップページ (Next.js App Router 概念)</h1>
      <p>app/page.tsx が `/` のルートに対応します。</p>
      <ul>
        <li><a href="/about">About ページへ</a></li>
      </ul>
    </div>
  );
}