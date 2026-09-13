import { useState, useMemo, useCallback } from "react";

// ダミーの大規模データ作成
const generateItems = () => {
  const items = [];
  for (let i = 1; i <= 5000; i++) {
    items.push(`アイテム #${i}`);
  }
  return items;
};

const ALL_ITEMS = generateItems();

export function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  // 1. useMemo で重いフィルタリング処理の結果をキャッシュ
  // query が変更された時だけ再計算され、count の更新による再レンダリングではスキップされる
  const filteredItems = useMemo(() => {
    console.log("🔍 フィルタリング処理を実行中...");
    return ALL_ITEMS.filter((item) => item.includes(query));
  }, [query]);

  // 2. useCallback でイベントハンドラー関数をキャッシュ
  const handleReset = useCallback(() => {
    setQuery("");
  }, []);

  return (
    <div style={{ padding: "24px", maxWidth: "500px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>⚡ Day 75: パフォーマンス最適化</h1>

      {/* 関係ないカウント操作 */}
      <div style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f3f4f6", borderRadius: "6px" }}>
        <p>カウント: <strong>{count}</strong></p>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "6px 12px", borderRadius: "4px", border: "1px solid #ccc", cursor: "pointer" }}
        >
          カウントアップ（再レンダリング発生）
        </button>
      </div>

      {/* 検索入力フォーム */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="数字で検索 (例: 50)..."
          style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleReset}
          style={{ padding: "8px 12px", borderRadius: "4px", border: "none", backgroundColor: "#ef4444", color: "white", cursor: "pointer" }}
        >
          リセット
        </button>
      </div>

      {/* 検索結果 */}
      <p style={{ color: "#6b7280" }}>該当件数: {filteredItems.length} 件</p>
      <ul style={{ maxHeight: "200px", overflowY: "auto", padding: "8px", border: "1px solid #e5e7eb", borderRadius: "4px" }}>
        {filteredItems.slice(0, 10).map((item, index) => (
          <li key={index} style={{ padding: "4px 0" }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;