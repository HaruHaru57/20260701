import dayjs from "dayjs";

// 現在日時を指定のフォーマットで取得
const now = dayjs().format("YYYY年MM月DD日 HH:mm:ss");

console.log("==========================================");
console.log("現在日時（Day.js経由）:", now);
console.log("==========================================");