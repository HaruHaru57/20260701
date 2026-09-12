import { useFetch } from "./useFetch";

export function App() {
  // カスタムフックを呼ぶだけ！
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <div style={{ padding: "24px" }}>⏳ データを読み込み中...</div>;
  if (error) return <div style={{ padding: "24px", color: "red" }}>⚠️ エラー: {error}</div>;

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>🛠️ Day 74: カスタムフック (useFetch)</h1>
      <p>コンポーネントから API 通信ロジックを分離・共通化しました。</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users && users.slice(0, 5).map((user) => (
          <li
            key={user.id}
            style={{
              padding: "12px",
              marginBottom: "8px",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#f9fafb"
            }}
          >
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;