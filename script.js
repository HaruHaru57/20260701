// 36
// const userName = "たろう";

// let score = 100;

// score = 150;

// console.log("--- 変数の確認 ---");
// console.log("ユーザー名", userName);
// console.log("スコア:", score);

// console.log(`${userName}さんの現在のスコアは ${score}点です!`);

// console.log("--- データ型の確認 ---");
// console.log("userNameの型:", typeof userName);
// console.log("scoreの型:", typeof score);

// 37-1

// const games = ["Rust", "R6S", "Apex"];

// console.log("一番のゲーム:", games[0]);
// console.log("ゲームの合計数:", games.length);


// const player = {
//     name: "たろう",
//     level: 50,
//     isOnline: true
// };

// console.log("プレイヤー名:", player.name);
// console.log("レベル", player.level);

// player.level = 51;
// console.log("レベルアップ後", player.level);

// 37-2

// const characters = [
//     {
//         id: 1,
//         name: "フリーレン",
//         job: "魔法使い",
//         level: 1000,
//         skills: ["ゾルトラーク", "花畑を出す魔法"]
//     },
//     {
//         id: 2,
//         name: "フェルン",
//         job: "魔法使い",
//         level: 18,
//         skills: ["一般攻撃魔法", "防御魔法"]
//     },
//     {
//         id: 3,
//         name: "シュタルク",
//         job: "戦士",
//         level: 19,
//         skills: ["閃天撃"]
//     }
// ];

// console.log("=== 練習問題スタート ===");

// // Q1. 「フリーレン」の名前をコンソールに表示してください。
// // ヒント: 0番目のデータの .name
// console.log("Q1の答え:", characters[0].name);


// // Q2. 「シュタルク」の職業（job）をコンソールに表示してください。
// // ヒント: 2番目のデータの .job
// console.log("Q2の答え:", characters[2].job);


// // Q3. 「フェルン」の1つ目のスキル（skillsの0番目）を表示してください。
// // ヒント: 1番目のデータの .skills[0]
// console.log("Q3の答え:", characters[1].skills[0]);


// // Q4. 「シュタルク」のレベル（level）を 20 に上書き（更新）し、
// //     更新後のレベルをコンソールに表示してください。
// characters[2].level = 20; 
// console.log("Q4の答え (レベル20のはず):", characters[2].level);


// // Q5. 新しいスキルを配列に追加する練習！
// //     characters[0].skills.push("民間魔法") を実行して、
// //     フリーレンのスキル一覧をコンソールで確認してみよう。
// characters[0].skills.push("民間魔法");
// console.log("Q5の答え (スキルが追加された配列):", characters[0].skills);

// 38

// const playerLevel = 50;
// const hasKey = true;

// console.log("--- ダンジョンの扉の判定 ---");

// if (playerLevel >= 50 && haskKey === true) {
//     console.log("ボス部屋の扉が開いた!");
// } else if (playerLevel >= 50 && hasKey === false) {
//     console.log("レベルは足りているが、鍵がない...");
// } else {
//     console.log("レベルが足りない!修行し直そう。");
// }


// 39

// const users = [
//     {name: "たろう", level: 50},
//     {name: "じろう", level: 30},
//     {name: "はなこ", level: 85}
// ];

// console.log("--- ユーザー一覧を表示 ---");

// for (const user of users) {
//     console.log(`${user.name}さんのレベルは　${user.level} です`);
// }

// 40

// function calcTax(price) {
//     const tax = price * 0.1;
//     return price + tax;
// }

// const item1 = calcTax(1000);
// const item2 = calcTax(2500);

// console.log(`1000円の商品の税込み価格: ${item1}円`);
// console.log(`2500円の商品の税込み価格: ${item2}円`);


// function showStatus(name, level) {
//     if (level >= 50) {
//         console.log(`${name} (Lv.${level}) : ベテランプレイヤーです`);
//     } else {
//         console.log(`${name} (Lv.${level}) : ビギナープレイヤーです`)
//     }
// }

// showStatus("たろう", 50);
// showStatus("じろう", 20);

// 41

// const titleElement = document.querySelector("#title");
// const textElement = document.querySelector("#text");

// titleElement.textContent = "JavaScriptでタイトルを書き換えました!";

// textElement.Style.color = "red";
// textElement.Style.fontSize = "20px";

// const changeText = (newText) => {
//     textElement.textContent = newText;
// };

// changeText("アロー関数を使って文章を更新しました!");

// 42

// const messageElement = document.querySelector("#message");
// const buttonElement = document.querySelector("#btn");


// buttonElement.addEventListener("click", () => {
//     messageElement.textContent = "ボタンがクリックされました。";

//     messageElement.style.color = "blue";

// });

// 43

// const titleElement = document.querySelector("#title");
// const inputElement = document.querySelector("#user-input");
// const sendBtn = document.querySelector("#send-btn");
// const toggleBtn = document.querySelector("#toggle-btn");

// sendBtn.addEventListener("click", () => {
//   const text = inputElement.value;
  
//   if (text !== "") {
//     titleElement.textContent = `${text}さん、こんにちは！`;
//   } else {
//     titleElement.textContent = "名前を入力してください！";
//   }
// });


// toggleBtn.addEventListener("click", () => {
//   titleElement.classList.toggle("highlight");
// });

// 44

// const todoInput = document.querySelector("#todo-input");
// const addBtn = document.querySelector("#add-btn");
// const todoList = document.querySelector("#todo-list");


// addBtn.addEventListener("click", () => {
//   const taskText = todoInput.value;


//   if (taskText !== "") {
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     li.addEventListener("click", () => {
//       li.classList.toggle("completed");
//     });

//     todoList.appendChild(li);

//     todoInput.value = "";
//   }
// });

// 45

// const products = [
//   { name: "ノート", price: 100, isStock: true },
//   { name: "消しゴム", price: 50, isStock: false },
//   { name: "ペン", price: 150, isStock: true },
//   { name: "ハサミ", price: 300, isStock: true }
// ];

// const availableProducts = products.filter((product) => {
//   return product.isStock === true;
// });

// console.log("--- 在庫ありの商品 ---");
// console.log(availableProducts);


// const productNames = products.map((product) => {
//   return product.name;
// });

// console.log("--- 商品名のリスト ---");
// console.log(productNames);

// 46

const loadBtn = document.querySelector("#load-btn");
const userList = document.querySelector("#user-list");

// データを取得する非同期関数（関数の前に async をつける）
const fetchUsers = async () => {
  userList.textContent = "読み込み中...";

  try {
    // 1. テスト用APIへリクエストを送り、結果が来るまで待つ（await）
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // 2. 受け取ったデータをJSON形式（JavaScriptのオブジェクト/配列）に変換して待つ（await）
    const users = await response.json();

    // 3. リストを一度空にする
    userList.textContent = "";

    // 4. 取得したユーザーデータをループして画面（<ul>）に追加
    for (const user of users) {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    }

  } catch (error) {
    // 通信エラーなどが起きた場合の処理
    console.error("エラーが発生しました:", error);
    userList.textContent = "データの取得に失敗しました。";
  }
};

// ボタンをクリックしたら非同期関数を実行
loadBtn.addEventListener("click", fetchUsers);