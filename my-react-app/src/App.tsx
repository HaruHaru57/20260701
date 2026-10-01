import { useState, useEffect } from "react";
import RootLayout from "./app/layout";
import HomePage from "./app/page";
import UserDetailPage from "./app/users/[id]/page";

export function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 簡単なパス判定処理（/users/1 や /users/2 など）
  const userMatch = path.match(/^\/users\/(.+)$/);

  return (
    <RootLayout>
      {userMatch ? (
        <UserDetailPage params={{ id: userMatch[1] }} />
      ) : (
        <HomePage />
      )}
    </RootLayout>
  );
}

export default App;