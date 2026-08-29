const products = [
  { name: "ノートパソコン", price: 120000, inStock: true },
  { name: "ワイヤレスマウス", price: 3000, inStock: true },
  { name: "メカニカルキーボード", price: 15000, inStock: false },
  { name: "USBハブ", price: 2500, inStock: true },
  { name: "ゲーミングモニター", price: 45000, inStock: false }
];

// 1. filter: 在庫がある（inStock === true）商品だけを抽出
const availableProducts = products.filter((product) => product.inStock);

// 2. map: 抽出された商品を HTML文字列（<li>...</li>）に変換
const listItemsHtml = availableProducts.map((product) => {
  return `<li>${product.name} - <span class="price">¥${product.price.toLocaleString()}</span></li>`;
});

// コンソールで確認（配列からHTML文字列の配列になっている）
console.log("filter結果:", availableProducts);
console.log("map結果:", listItemsHtml);

// 3. join("") で文字列として結合し、画面に出力
const productListEl = document.querySelector("#product-list");
productListEl.innerHTML = listItemsHtml.join("");