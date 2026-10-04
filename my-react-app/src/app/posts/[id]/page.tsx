import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

// データを取得する共通関数
async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  } as any);

  if (!res.ok) {
    throw new Error("記事の取得に失敗しました");
  }

  return res.json();
}

// 擬似的な Metadata 構造を出力・表現するコンポーネント
export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const post = await getPost(params.id);

  // 本来 Next.js では export async function generateMetadata() で自動処理されるメタデータ
  const pageTitle = `${post.title} | マイブログ`;
  const pageDescription = post.body.slice(0, 60) + "...";

  return (
    <div style={{ padding: "16px", border: "1px solid #cbd5e1", borderRadius: "8px" }}>
      {/* 模擬 Metadata 表示（<head> 内に挿入される内容） */}
      <div
        style={{
          background: "#f1f5f9",
          padding: "10px",
          borderRadius: "6px",
          marginBottom: "16px",
          fontSize: "0.85rem",
          color: "#475569",
        }}
      >
<strong>🏷️ 生成された SEO メタデータ ({"<head>"})</strong>
        <div>• Title: {pageTitle}</div>
        <div>• Description: {pageDescription}</div>
      </div>

      <span style={{ fontSize: "0.8rem", color: "#2563eb", fontWeight: "bold" }}>
        記事 ID: #{post.id}
      </span>
      <h2 style={{ marginTop: "4px", color: "#0f172a" }}>{post.title}</h2>
      <p style={{ lineHeight: "1.6", color: "#334155" }}>{post.body}</p>

      <a href="/posts" style={{ fontSize: "0.9rem", color: "#2563eb" }}>
        ← 記事一覧に戻る
      </a>
    </div>
  );
}