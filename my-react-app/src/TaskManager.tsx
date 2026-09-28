import React, { useState, useRef } from "react";
import { Task, FilterType } from "./types";
import { useLocalStorage } from "./useLocalStorage";

export const TaskManager: React.FC = () => {
  // カスタムフックでタスク一覧を LocalStorage 保存
  const [tasks, setTasks] = useLocalStorage<Task[]>("typescript_tasks", []);
  const [inputText, setInputText] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");

  const inputRef = useRef<HTMLInputElement>(null);

  // タスク追加（React.FormEvent）
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: inputText.trim(),
      isCompleted: false,
      createdAt: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }),
    };

    setTasks([...tasks, newTask]);
    setInputText("");
    inputRef.current?.focus(); // 入力欄にフォーカスを戻す
  };

  // 完了状態の切り替え
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // 削除処理
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // フィルター処理
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "12px", background: "#fff" }}>
      <h2>📝 TypeScript Task Manager</h2>

      {/* フォーム入力部 */}
      <form onSubmit={handleAddTask} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          placeholder="新しいタスクを入力..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", borderRadius: "6px", border: "none", background: "#4f46e5", color: "#fff", cursor: "pointer", fontWeight: "bold" }}
        >
          追加
        </button>
      </form>

      {/* フィルターボタン部 */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {(["all", "active", "completed"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "4px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: filter === f ? "#e0e7ff" : "#f9fafb",
              color: filter === f ? "#3730a3" : "#374151",
              fontWeight: filter === f ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {f === "all" ? "すべて" : f === "active" ? "未完了" : "完了済み"}
          </button>
        ))}
      </div>

      {/* タスク一覧表示 */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {filteredTasks.length === 0 ? (
          <p style={{ color: "#888", fontSize: "0.9rem" }}>タスクがありません。</p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderBottom: "1px solid #eee",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTask(task.id)}
                />
                <span style={{ textDecoration: task.isCompleted ? "line-through" : "none", color: task.isCompleted ? "#888" : "#000" }}>
                  {task.title}
                </span>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>({task.createdAt})</span>
              </label>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "0.9rem" }}
              >
                削除
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};