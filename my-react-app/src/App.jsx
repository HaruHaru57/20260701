import { useForm } from "react-hook-form";

export function App() {
  // useForm からフォーム制御に必要な関数と状態を取得
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // フォーム送信時の処理（バリデーション通過時のみ実行される）
  const onSubmit = (data) => {
    console.log("送信されたデータ:", data);
    alert(`送信成功！\nお名前: ${data.name}\nメール: ${data.email}`);
    reset(); // フォームのリセット
  };

  return (
    <div style={{ padding: "24px", maxWidth: "450px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>📝 Day 76: フォーム制御とバリデーション</h1>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* お名前入力 */}
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>お名前</label>
          <input
            type="text"
            {...register("name", { required: "お名前は必須です" })}
            placeholder="山田 太郎"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
          {errors.name && <p style={{ color: "#ef4444", margin: "4px 0 0", fontSize: "0.85rem" }}>{errors.name.message}</p>}
        </div>

        {/* メールアドレス入力 */}
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>メールアドレス</label>
          <input
            type="email"
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "正しいメールアドレスの形式で入力してください"
              }
            })}
            placeholder="example@email.com"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
          {errors.email && <p style={{ color: "#ef4444", margin: "4px 0 0", fontSize: "0.85rem" }}>{errors.email.message}</p>}
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>お問い合わせ内容</label>
          <textarea
            {...register("message", {
              required: "内容を入力してください",
              minLength: { value: 10, message: "10文字以上で入力してください" }
            })}
            rows={4}
            placeholder="10文字以上でご記入ください..."
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
          {errors.message && <p style={{ color: "#ef4444", margin: "4px 0 0", fontSize: "0.85rem" }}>{errors.message.message}</p>}
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          送信する
        </button>
      </form>
    </div>
  );
}

export default App;