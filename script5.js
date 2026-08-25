const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

tabItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 1. 全てのタブ・コンテンツの active を解除
    tabItems.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // 2. クリックされたタブを active にする
    item.classList.add("active");

    // 3. 対応するコンテンツを表示する
    const targetId = item.dataset.tab;
    const targetContent = document.getElementById(targetId);
    
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});