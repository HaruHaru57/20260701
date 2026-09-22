import { UserProfile } from "./UserProfile";

export function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Day 84 - TypeScript × React Props/State</h1>
      
      {/* 正常な呼び出し */}
      <UserProfile name="Haru" age={21} role="管理者" />
      <UserProfile name="Taro" age={20} />

      {/* 💡 型エラーの実験（コメントアウトを外すとVS Code上で赤線が出ます） */}
      {/* <UserProfile name="Jiro" age="22" />  ← ageに文字列を渡すとエラー */}
    </div>
  );
}

export default App;