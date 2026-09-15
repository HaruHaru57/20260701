import { useState } from "react";

// コンポーネントライブラリの思想を取り入れた「再利用可能な Button」
function UIComponentButton({ variant = "primary", children, onClick }) {
  const baseStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const variants = {
    primary: { backgroundColor: "#4f46e5", color: "#ffffff" },
    secondary: { backgroundColor: "#e0e7ff", color: "#3730a3" },
    danger: { backgroundColor: "#fee2e2", color: "#991b1b" },
  };

  return (
    <button style={{ ...baseStyle, ...variants[variant] }} onClick={onClick}>
      {children}
    </button>
  );
}

// カード構造コンポーネント
function UICard({ title, description, badgeText, onAction }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        border: "1px solid #f3f4f6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#111827" }}>{title}</h3>
          <span
            style={{
              fontSize: "0.75rem",
              padding: "2px 8px",
              borderRadius: "9999px",
              backgroundColor: "#dbeafe",
              color: "#1e40af",
              fontWeight: "bold",
            }}
          >
            {badgeText}
          </span>
        </div>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.5" }}>{description}</p>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <UIComponentButton variant="primary" onClick={() => onAction("詳細")}>
          詳細を見る
        </UIComponentButton>
        <UIComponentButton variant="secondary" onClick={() => onAction("編集")}>
          編集
        </UIComponentButton>
      </div>
    </div>
  );
}

export function App() {
  const [lastAction, setLastAction] = useState("なし");

  const handleCardAction = (actionType) => {
    setLastAction(actionType);
  };

  return (
    <div style={{ padding: "32px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "1.75rem", color: "#111827", marginBottom: "8px" }}>🎨 Day 77: コンポーネントライブラリ活用</h1>
        <p style={{ color: "#6b7280", margin: 0 }}>
          統一されたスタイル定義と Variant（バリエーション）構造を持つ UI パーツの組み立て。
        </p>
      </header>

      <div style={{ padding: "12px 16px", backgroundColor: "#e0f2fe", borderRadius: "8px", color: "#0369a1", marginBottom: "24px", fontSize: "0.9rem" }}>
        💡 最後に実行されたアクション: <strong>{lastAction}</strong>
      </div>

      {/* グリッドレイアウトによるカード一覧 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
        <UICard
          title="React 基礎マスター"
          description="Component、Props、State の基本から ToDo アプリ作成までを網羅。"
          badgeText="Completed"
          onAction={handleCardAction}
        />
        <UICard
          title="Web API 通信"
          description="useEffect と fetch を使った非同期データ取得とローディング状態制御。"
          badgeText="Phase 4"
          onAction={handleCardAction}
        />
        <UICard
          title="UI ライブラリ導入"
          description="モダンなデザインシステムと再利用可能なコンポーネント設計手法。"
          badgeText="Today"
          onAction={handleCardAction}
        />
      </div>
    </div>
  );
}

export default App;