import React from "react";

interface CardProps {
  title: string;
  category: string;
  description: string;
  badgeColor?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  category,
  description,
  badgeColor = "#6366f1",
}) => {
  return (
    // Tailwind クラスイメージ: "max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    <div
      style={{
        maxWidth: "360px",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.2s ease-in-out",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        {/* Tailwind クラスイメージ: "inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" */}
        <span
          style={{
            display: "inline-block",
            borderRadius: "9999px",
            padding: "4px 10px",
            fontSize: "0.75rem",
            fontWeight: "600",
            backgroundColor: badgeColor,
            color: "#ffffff",
          }}
        >
          {category}
        </span>
        <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>UI Component</span>
      </div>

      {/* Tailwind クラスイメージ: "text-lg font-bold text-gray-900" */}
      <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#111827", margin: "0 0 8px 0" }}>
        {title}
      </h3>

      {/* Tailwind クラスイメージ: "text-sm text-gray-600 leading-relaxed" */}
      <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: "1.6", margin: "0 0 16px 0" }}>
        {description}
      </p>

      {/* Tailwind クラスイメージ: "w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700" */}
      <button
        style={{
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "#4f46e5",
          padding: "8px 16px",
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
        }}
      >
        詳細を見る
      </button>
    </div>
  );
};