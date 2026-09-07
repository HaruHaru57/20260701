export function Card({ title, category, isCompleted }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      backgroundColor: isCompleted ? "#e6fffa" : "#ffffff"
    }}>
      <span style={{ fontSize: "0.8rem", color: "#666", fontWeight: "bold" }}>
        [{category}]
      </span>
      <h3 style={{ margin: "8px 0" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        状態: {isCompleted ? "✅ 完了" : "⏳ 進行中"}
      </p>
    </div>
  );
}