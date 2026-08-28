const themeToggleBtn = document.querySelector("#theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// --- 2. リアルタイム自動保存メモ (input + LocalStorage) ---
const memoInput = document.querySelector("#memo-input");
const saveStatus = document.querySelector("#save-status");

// 初期化：保存されているメモを読み込む
memoInput.value = localStorage.getItem("dashboardMemo") || "";

memoInput.addEventListener("input", () => {
  localStorage.setItem("dashboardMemo", memoInput.value);
  saveStatus.textContent = "保存されました (" + new Date().toLocaleTimeString() + ")";
});

// --- 3. モーダル表示制御 ---
const openInfoBtn = document.querySelector("#open-info-btn");
const closeInfoBtn = document.querySelector("#close-info-btn");
const infoModal = document.querySelector("#info-modal");

openInfoBtn.addEventListener("click", () => infoModal.classList.remove("hidden"));
closeInfoBtn.addEventListener("click", () => infoModal.classList.add("hidden"));
infoModal.addEventListener("click", (e) => {
  if (e.target === infoModal) infoModal.classList.add("hidden");
});