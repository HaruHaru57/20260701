"use client";

import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export default function AuthDemoPage() {
  const { user, status, login, logout } = useAuthStore();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName || !inputEmail) return;
    login(inputName, inputEmail);
  };

  return (
    <div>
      <h3 style={{ margin: "0 0 8px 0", color: "#0f172a" }}>🔒 NextAuth.js (Auth.js) 認証演習</h3>
      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "20px" }}>
        ログイン状態（Session）に応じて表示UIやアクセス可能な領域を切り替える基本パターンです。
      </p>

      {status === "authenticated" && user ? (
        // ログイン完了時の表示（保護されたダッシュボード・マイページ領域）
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <span style={{ fontSize: "2rem" }}>👤</span>
            <div>
              <h4 style={{ margin: 0, color: "#166534" }}>{user.name} さんでログイン中</h4>
              <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#15803d" }}>{user.email}</p>
            </div>
          </div>

          <p style={{ fontSize: "0.875rem", color: "#374151" }}>
            ✅ 認証セッション（JWT / Session Cookie）が確立されています。
          </p>

          <button
            onClick={logout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            ログアウト (`signOut()`)
          </button>
        </div>
      ) : (
        // 未ログイン時の表示（ログインフォーム領域）
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            maxWidth: "400px",
          }}
        >
          <h4 style={{ margin: "0 0 16px 0", color: "#1e293b" }}>🔑 ログイン (`signIn()`)</h4>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "4px" }}>ユーザー名:</label>
              <input
                type="text"
                placeholder="例: yamamiya"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "4px" }}>メールアドレス:</label>
              <input
                type="email"
                placeholder="example@test.com"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "4px",
              }}
            >
              ログインを実行
            </button>
          </form>
        </div>
      )}
    </div>
  );
}