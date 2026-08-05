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

// 37

const games = ["Rust", "R6S", "Apex"];

console.log("一番のゲーム:", games[0]);
console.log("ゲームの合計数:", games.length);


const player = {
    name: "たろう",
    level: 50,
    isOnline: true
};

console.log("プレイヤー名:", player.name);
console.log("レベル", player.level);

player.level = 51;
console.log("レベルアップ後", player.level);