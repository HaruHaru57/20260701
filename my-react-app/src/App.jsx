import { Card } from "./Card";

export function App() {
  const taskList = [
    { id: 1, title: "React の Props の概念理解", category: "フロントエンド", isCompleted: true },
    { id: 2, title: "Vite + React でコンポーネント分割", category: "環境構築", isCompleted: true },
    { id: 3, title: "Day 70 ミニアプリの設計", category: "実践開発", isCompleted: false },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}>
      <h1>Day 69: Props によるコンポーネント分割</h1>

      {/* 配列データを map でループし、Props を渡して Card を複数レンダリング */}
      {taskList.map((task) => (
        <Card
          key={task.id}
          title={task.title}
          category={task.category}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
}

export default App;