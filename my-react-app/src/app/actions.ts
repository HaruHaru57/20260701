"use server";

export interface ActionResult {
  success: boolean;
  message: string;
}

// フォームから送信されたデータを処理する Server Action 関数
export async function createPostAction(formData: FormData): Promise<ActionResult> {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    return {
      success: false,
      message: "タイトルと本文を入力してください。",
    };
  }

  // 本来はここで DB への保存処理（Prisma や Supabase 等）を実行します
  console.log("［Server Action］ データベースに保存中...", { title, content });

  // 1秒の擬似的な遅延
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: `「${title}」を作成しました！（サーバー処理完了）`,
  };
}