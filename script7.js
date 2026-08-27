const backToTopBtn = document.querySelector("#back-to-top");

// スクロールイベントの監視
window.addEventListener("scroll", () => {
  // 300px以上スクロールされたらボタンを表示
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

// ボタンクリック時にページ最上部へスムーズ移動
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // スルスルっと滑らかにスクロール
  });
});