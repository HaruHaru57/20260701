import React from "react";

// ① 取得データの型定義
interface Post {
  id: number;
  title: string;
  body: string;
}

// ② サーバー側でデータを取得する関数
async function getPosts(): Promise<Post[]> {
  // `as any` を追加して型チェックを回避
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: { revalidate: 10 },
  } as any);

  if (!res.ok) {
    throw new Error("データの取得に失敗しました");
  }

  return res.json();
}

// ③ 非同期コンポーネント (async/await が直接使える)
export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h3>📰 最新記事一覧 (Server Component Fetch)</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
        サーバー側で `fetch` 処理を行って描画しています。
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              padding: "12px",
              marginBottom: "8px",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
            }}
          >
            <h4 style={{ margin: "0 0 6px 0", color: "#1e293b" }}>
              #{post.id} {post.title}
            </h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#475569" }}>
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}