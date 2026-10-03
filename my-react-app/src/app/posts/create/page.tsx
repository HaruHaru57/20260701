"use client";

import React, { useState } from "react";
import { createPostAction, ActionResult } from "../../actions";

export default function CreatePostPage() {
  const [result, setResult] = useState<ActionResult | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const res = await createPostAction(formData);

    setResult(res);
    setIsPending(false);
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
      <h3>✍️ 新規投稿作成 (Server Actions)</h3>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.9rem", marginBottom: "4px" }}>タイトル:</label>
          <input
            type="text"
            name="title"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: "0.9rem", marginBottom: "4px" }}>本文:</label>
          <textarea
            name="content"
            rows={3}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: "8px 16px",
            background: isPending ? "#94a3b8" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: isPending ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          {isPending ? "送信中..." : "サーバーに送信"}
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: "16px",
            padding: "10px",
            borderRadius: "4px",
            background: result.success ? "#dcfce7" : "#fee2e2",
            color: result.success ? "#166534" : "#991b1b",
            fontSize: "0.9rem",
          }}
        >
          {result.message}
        </div>
      )}
    </div>
  );
}