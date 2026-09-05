// ボタンを表示・管理する「ボタンコンポーネント」
export function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.padding = "10px 20px";
  button.style.fontSize = "1rem";
  button.style.borderRadius = "6px";
  button.style.border = "none";
  button.style.backgroundColor = "#10B981";
  button.style.color = "white";
  button.style.cursor = "pointer";

  button.addEventListener("click", onClick);
  return button;
}