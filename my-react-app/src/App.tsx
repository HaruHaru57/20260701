import { useState } from "react";

// 1. ToDo アイテムの型定義
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// 2. Props の型定義
type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

// 子コンポーネント（Props に型を注釈）
function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        padding: "10px 14px",
        marginBottom: "8px",
        borderRadius: "6px",
        backgroundColor: todo.completed ? "#e5e7eb" : "#ffffff",
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#9ca3af" : "#1f2937",
        border: "1px solid #d1d5db",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {todo.completed ? "✅ " : "⬜ "} {todo.text}
    </li>
  );
}

export function App() {
  // useState で Todo の配列型を指定
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "TypeScript の基本型を理解する", completed: true },
    { id: 2, text: "React コンポーネントに型を付ける", completed: false },
  ]);
  const [inputText, setInputText] = useState<string>("");

  // 追加処理
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  // トグル処理
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ padding: "24px", maxWidth: "450px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>🟦 Day 78: TypeScript × React 入門</h1>
      <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
        型（Type）を導入し、データ構造と Props の受け渡しを厳密に管理します。
      </p>

      <form onSubmit={handleAdd} style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          placeholder="新しいタスクを入力..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
        >
          追加
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}

export default App;