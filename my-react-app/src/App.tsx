import { useState, useEffect } from "react";
import HomePage from "./app/page";
import AboutPage from "./app/about/page";

export function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div>
      {path === "/about" ? <AboutPage /> : <HomePage />}
    </div>
  );
}

export default App;