import { useState, useEffect } from "react";
import RootLayout from "./app/layout";
import HomePage from "./app/page";
import UserDetailPage from "./app/users/[id]/page";
import PostsPage from "./app/posts/page";
import CreatePostPage from "./app/posts/create/page";

export function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [postsComponent, setPostsComponent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (path === "/posts") {
      PostsPage().then(setPostsComponent);
    }
  }, [path]);

  const userMatch = path.match(/^\/users\/(.+)$/);

  return (
    <RootLayout>
      <nav style={{ marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #eee" }}>
        <a href="/" style={{ marginRight: "12px" }}>Top</a>
        <a href="/posts" style={{ marginRight: "12px" }}>Posts</a>
        <a href="/posts/create">新規投稿 (Server Actions)</a>
      </nav>

      {path === "/posts/create" ? (
        <CreatePostPage />
      ) : path === "/posts" ? (
        postsComponent || <p>🔄 サーバーからデータ取得中...</p>
      ) : userMatch ? (
        <UserDetailPage params={{ id: userMatch[1] }} />
      ) : (
        <HomePage />
      )}
    </RootLayout>
  );
}

export default App;