import React, { useRef } from "react";

export const FocusInput: React.FC = () => {
  // ① HTMLInputElement 型の参照を作成（初期値は null）
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // ② オプショナルチェイニング（?.）を使って安全に focus() を呼び出す
    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>🔍 useRef による DOM 操作（型定義付き）</h3>
      <div style={{ marginBottom: "12px" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="ここへフォーカス移動します"
          style={{ padding: "8px", width: "80%" }}
        />
      </div>
      <div>
        <button onClick={handleFocus} style={{ marginRight: "8px" }}>
          フォーカスを当てる
        </button>
        <button onClick={handleClear}>クリアしてフォーカス</button>
      </div>
    </div>
  );
};