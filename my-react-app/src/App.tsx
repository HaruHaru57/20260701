import { useState, useEffect } from "react";
import RootLayout from "./app/layout";
import HomePage from "./app/page";
import UserDetailPage from "./app/users/[id]/page";
import PostsPage from "./app/posts/page";
import CreatePostPage from "./app/posts/create/page";
import PostDetailPage from "./app/posts/[id]/page";
import UIDemoPage from "./app/ui-demo/page";
import CartDemoPage from "./app/cart-demo/page";
import AuthDemoPage from "./app/auth-demo/page";

export function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [postsComponent, setPostsComponent] = useState<React.ReactNode | null>(null);
  const [postDetailComponent, setPostDetailComponent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const postMatch = path.match(/^\/posts\/(\d+)$/);
  const userMatch = path.match(/^\/users\/(.+)$/);

  useEffect(() => {
    if (path === "/posts") {
      PostsPage().then(setPostsComponent);
    } else if (postMatch) {
      PostDetailPage({ params: { id: postMatch[1] } }).then(setPostDetailComponent);
    }
  }, [path]);

  return (
    <RootLayout>
      <nav style={{ marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #eee", fontSize: "0.85rem" }}>
        <a href="/" style={{ marginRight: "12px" }}>Top</a>
        <a href="/posts" style={{ marginRight: "12px" }}>Posts</a>
        <a href="/posts/create" style={{ marginRight: "12px" }}>Create</a>
        <a href="/ui-demo" style={{ marginRight: "12px" }}>UI Demo</a>
        <a href="/cart-demo" style={{ marginRight: "12px" }}>Cart Demo</a>
        <a href="/auth-demo">Auth Demo</a>
      </nav>

      {path === "/auth-demo" ? (
        <AuthDemoPage />
      ) : path === "/cart-demo" ? (
        <CartDemoPage />
      ) : path === "/ui-demo" ? (
        <UIDemoPage />
      ) : postMatch ? (
        postDetailComponent || <p>🔄 記事データを取得中...</p>
      ) : path === "/posts/create" ? (
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