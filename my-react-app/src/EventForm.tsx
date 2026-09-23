import React, { useState } from "react";

export const EventForm: React.FC = () => {
  const [text, setText] = useState<string>("");

  // ① input 要素の変更イベント（ChangeEvent）の型定義
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // ② フォーム送信イベント（FormEvent）の型定義
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`送信された値: ${text}`);
    setText("");
  };

  // ③ ボタンのクリックイベント（MouseEvent）の型定義
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // イベントのバブリング防止など
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>📝 入力フォーム（型定義付き）</h3>
      <div style={{ marginBottom: "12px" }}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="文字を入力してください"
          style={{ padding: "8px", width: "80%" }}
        />
      </div>
      <div>
        <button type="submit" style={{ marginRight: "8px" }}>送信</button>
        <button type="button" onClick={handleReset}>リセット</button>
      </div>
    </form>
  );
};