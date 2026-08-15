import { add, tax } from "./math.js";

const price = 1000;
const totalPrice = add(price, price * tax);

console.log(`税込み合計金額: ${totalPrice}円`);