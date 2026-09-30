"use client"; // Client Component であることを明示

import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ border: "1px dashed #4f46e5", padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
      <h4>🖱️ Client Component (Counter)</h4>
      <p>useState や onClick などのインタラクティブな処理を担当します。</p>
      <button onClick={() => setCount(count + 1)}>
        カウント: {count}
      </button>
    </div>
  );
};