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

40

function calcTax(price) {
    const tax = price * 0.1;
    return price + tax;
}

const item1 = calcTax(1000);
const item2 = calcTax(2500);

console.log(`1000円の商品の税込み価格: ${item1}円`);
console.log(`2500円の商品の税込み価格: ${item2}円`);


function showStatus(name, level) {
    if (level >= 50) {
        console.log(`${name} (Lv.${level}) : ベテランプレイヤーです`);
    } else {
        console.log(`${name} (Lv.${level}) : ビギナープレイヤーです`)
    }
}

showStatus("たろう", 50);
showStatus("じろう", 20);