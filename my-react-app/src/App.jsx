import { useState, useEffect } from "react";

export function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // コンポーネントの初回レンダリング時に API 通信を実行
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 外部のダミーAPIへデータをリクエスト
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        setUsers(data); // 取得したデータで State を更新
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      } finally {
        setLoading(false); // 通信完了後にローディングを解除
      }
    };

    fetchUsers();
  }, []); // 第2引数を空配列 [] にすることで初回1回のみ実行される

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>🌐 Day 71: ユーザー一覧（API通信）</h1>

      {loading ? (
        <p>データを受け込み中...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                padding: "12px 16px",
                marginBottom: "8px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb"
              }}
            >
              <strong style={{ fontSize: "1.1rem" }}>{user.name}</strong>
              <p style={{ margin: "4px 0 0", color: "#6b7280", fontSize: "0.9rem" }}>
                📧 {user.email} | 🏢 {user.company.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;