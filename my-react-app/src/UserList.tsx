import React, { useState, useEffect } from "react";

// ① APIから返ってくるユーザーオブジェクトの型定義
interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export const UserList: React.FC = () => {
  // ② Stateの型定義（Userの配列、ローディング状態、エラーメッセージ）
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        // ③ 取得したデータを User[] 型としてキャスト
        const data = (await response.json()) as User[];
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("予期せぬエラーが発生しました");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 条件分岐レンダリング
  if (loading) return <p>🔄 データを読み込み中...</p>;
  if (error) return <p style={{ color: "red" }}>⚠️ エラー: {error}</p>;

  return (
    <div>
      <h3>👥 ユーザーリスト（API通信）</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {users.slice(0, 5).map((user) => (
          <li key={user.id} style={{ marginBottom: "8px" }}>
            <strong>{user.name}</strong> ({user.email})<br />
            <span style={{ fontSize: "0.85rem", color: "#666" }}>
              🏢 {user.company.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};