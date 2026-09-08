import { useState } from "react";
import { TaskItem } from "./TaskItem";

export function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "React のコンポーネント設計を理解する", isCompleted: true },
    { id: 2, title: "State と Props の連携を復習する", isCompleted: false },
  ]);
  const [inputText, setInputText] = useState("");

  // タスク追加
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTask = {
      id: Date.now(),
      title: inputText,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setInputText("");
  };

  // 完了フラグ切り替え
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // タスク削除
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 未完了タスク数の計算
  const remainingCount = tasks.filter((t) => !t.isCompleted).length;

  return (
    <div style={{ padding: "24px", maxWidth: "450px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📝 React Task Manager</h1>
      <p style={{ color: "#6b7280", marginBottom: "16px" }}>
        未完了タスク: <strong>{remainingCount}</strong> 件
      </p>

      {/* タスク入力フォーム */}
      <form onSubmit={handleAddTask} style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="新しいタスクを入力..."
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #d1d5db"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4f46e5",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          追加
        </button>
      </form>

      {/* タスクリスト表示 */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;