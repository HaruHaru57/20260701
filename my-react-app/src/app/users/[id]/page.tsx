import React from "react";

interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserDetailPage({ params }: UserPageProps) {
  return (
    <div>
      <h3>👤 ユーザー詳細ページ</h3>
      <p style={{ fontSize: "1.1rem" }}>
        現在のユーザーID: <strong style={{ color: "#2563eb" }}>{params.id}</strong>
      </p>
      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
        `app/users/[id]/page.tsx` によって `/users/{params.id}` のパスを動的に処理しています。
      </p>
    </div>
  );
}