export function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      marginBottom: "8px",
      borderRadius: "6px",
      backgroundColor: task.isCompleted ? "#f3f4f6" : "#ffffff",
      border: "1px solid #e5e7eb"
    }}>
      <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
        />
        <span style={{
          textDecoration: task.isCompleted ? "line-through" : "none",
          color: task.isCompleted ? "#9ca3af" : "#1f2937"
        }}>
          {task.title}
        </span>
      </label>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: "none",
          border: "none",
          color: "#ef4444",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        削除
      </button>
    </li>
  );
}