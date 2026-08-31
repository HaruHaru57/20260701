const outputEl = document.querySelector("#output");

// --- 1. 分割代入 ---
const user = { id: 101, name: "Haru", role: "Developer" };
// プロパティ名で直接取り出す
const { name, role } = user;
console.log("1. 分割代入:", name, role);

// --- 2. スプレッド構文 (配列・オブジェクトの結合・追加) ---
const defaultSkills = ["HTML", "CSS"];
const mySkills = [...defaultSkills, "JavaScript", "Git"];
console.log("2. スプレッド構文(配列):", mySkills);

const baseUser = { name: "Haru", country: "Japan" };
const updatedUser = { ...baseUser, role: "Frontend Developer", country: "Japan" }; // 上書き・追加
console.log("2. スプレッド構文(オブジェクト):", updatedUser);

// --- 3. オプショナルチェイニング (?.) ---
const userData1 = { profile: { city: "Tokyo" } };
const userData2 = { profile: null }; // profileが存在しない可能性のあるデータ

// userData2.profile.city と書くとエラーになるが、?. を使えば安全！
const city1 = userData1.profile?.city ?? "未設定";
const city2 = userData2.profile?.city ?? "未設定"; // エラーにならず "未設定" になる

console.log("3. オプショナルチェイニング1:", city1);
console.log("3. オプショナルチェイニング2:", city2);

// 画面へ表示
outputEl.innerHTML = `
  <p><strong>ユーザー名:</strong> ${name} (${role})</p>
  <p><strong>スキル一覧:</strong> ${mySkills.join(", ")}</p>
  <p><strong>取得した都市名:</strong> ${city1} / ${city2}</p>
`;