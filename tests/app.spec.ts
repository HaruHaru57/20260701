import { test, expect } from '@playwright/test';

test.describe('ToDo / アプリの画面操作テスト', () => {
  // 各テストの前に開発サーバーのURLへアクセス
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('タイトルが正しく表示されていること', async ({ page }) => {
    // 画面内に特定のテキストや要素が存在するか確認
    await expect(page).toHaveTitle(/Vite/); // タイトルのチェック
  });

  test('ボタンをクリックして要素が更新されること', async ({ page }) => {
    // ボタン要素を取得してクリック操作を自動化
    const button = page.getByRole('button', { name: /count is/i });
    
    if (await button.isVisible()) {
      await button.click();
      // クリック後のテキスト変化を検証
      await expect(button).toContainText('count is 1');
    }
  });
});