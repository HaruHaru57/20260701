const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const form = document.querySelector("#signup-form");

// ユーザー名の検証（inputイベント：入力するたびに実行）
usernameInput.addEventListener("input", () => {
  const value = usernameInput.value.trim();

  if (value.length < 3) {
    usernameError.textContent = "ユーザー名は3文字以上で入力してください";
    usernameInput.classList.add("error-border");
  } else {
    usernameError.textContent = "";
    usernameInput.classList.remove("error-border");
  }
});

// メールアドレスの検証
emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();
  // 簡易的なメールアドレスチェック用の正規表現（@とドットが含まれているか）
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    emailError.textContent = "正しいメールアドレスの形式で入力してください";
    emailInput.classList.add("error-border");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error-border");
  }
});

// フォーム送信時の判定（submitイベント）
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ページ再読み込み（デフォルト動作）を防止

  if (usernameInput.value.trim().length < 3 || !emailInput.value.includes("@")) {
    alert("入力内容に不備があります！確認してください。");
  } else {
    alert("送信が完了しました！");
  }
});