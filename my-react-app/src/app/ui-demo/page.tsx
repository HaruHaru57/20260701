import React from "react";
import { Card } from "../components/Card";

export default function UIDemoPage() {
  return (
    <div>
      <h3 style={{ margin: "0 0 8px 0", color: "#0f172a" }}>🎨 Tailwind UI コンポーネント演習</h3>
      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "20px" }}>
        ユーティリティファーストな設計で、カードやバッジなどの共通UIパーツをコンポーネント化しています。
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
        <Card
          category="Next.js"
          title="App Router の基礎"
          description="ファイルベースルーティングや Server Components の活用方法を学びます。"
          badgeColor="#000000"
        />
        <Card
          category="Tailwind CSS"
          title="モダンUIデザイン"
          description="ユーティリティクラスを使って素早く一貫性のあるデザインを構築します。"
          badgeColor="#06b6d4"
        />
      </div>
    </div>
  );
}