import React, { useState } from "react";

// ① Props（親から受け取るデータ）の型定義
interface UserProfileProps {
  name: string;
  age: number;
  role?: string; // ? をつけるとオプショナル（任意）になる
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, age, role = "一般ユーザー" }) => {
  // ② State の型定義（<number> で数値型に限定）
  const [likes, setLikes] = useState<number>(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
      <h3>👤 {name} さんのプロフィール</h3>
      <p>年齢: {age} 歳</p>
      <p>権限: {role}</p>
      <button onClick={() => setLikes(likes + 1)}>
        いいね！ {likes}
      </button>
    </div>
  );
};