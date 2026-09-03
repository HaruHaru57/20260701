import dayjs from "dayjs";
import confetti from "canvas-confetti";

// 画面の初期描画
document.querySelector("#app").innerHTML = `
  <div style="text-align: center; padding: 40px; font-family: sans-serif;">
    <h1>🎉 Vite + npm パッケージ連携</h1>
    <p id="clock" style="font-size: 1.5rem; font-weight: bold; color: #4F46E5;"></p>
    <button id="celebrate-btn" style="padding: 12px 24px; font-size: 1rem; cursor: pointer; border-radius: 8px; border: none; background: #4F46E5; color: white;">
      紙吹雪を降らせる！
    </button>
  </div>
`;

// 1. dayjs を使ったリアルタイム時計
const clockEl = document.querySelector("#clock");
const updateClock = () => {
  clockEl.textContent = dayjs().format("YYYY年MM月DD日 HH:mm:ss");
};
setInterval(updateClock, 1000);
updateClock();

// 2. canvas-confetti を使ったボタンイベント
const btn = document.querySelector("#celebrate-btn");
btn.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});
