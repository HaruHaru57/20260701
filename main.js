import { createButton } from "./Button.js";

const app = document.querySelector("#app");
app.innerHTML = `
  <div style="padding: 20px; font-family: sans-serif;">
    <h1>Day 67: コンポーネント指向の基礎</h1>
    <div id="button-container"></div>
    <p id="count-text">カウント: 0</p>
  </div>
`;

let count = 0;
const countText = document.querySelector("#count-text");

// コンポーネントを呼び出して配置
const myButton = createButton("カウントアップ！", () => {
  count++;
  countText.textContent = `カウント: ${count}`;
});

document.querySelector("#button-container").appendChild(myButton);