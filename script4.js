const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector("#modal");

// モーダルを開く
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// モーダルを閉じる関数
const closeModal = () => {
  modal.classList.add("hidden");
};

// 閉じるボタンクリック時
closeBtn.addEventListener("click", closeModal);

// 背景（黒いエリア）をクリックした時も閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});