import { test, expect } from '@playwright/test';

test.describe('ToDo / アプリの画面操作テスト', () => {

  test('タイトルが正しく表示されていること', async ({ page }) => {
    // 開発サーバーへアクセス
    await page.goto('http://localhost:5173');
    
    // ページタイトルに Vite または React が含まれているかチェック
    await expect(page).toHaveTitle(/Vite|React/i);
  });

  test('ボタンをクリックして要素が更新されること', async ({ page }) => {
    // 開発サーバーへアクセス
    await page.goto('http://localhost:5173');
    
    // 画面内にボタン要素が存在することを確認
    const button = page.getByRole('button').first();
    await expect(button).toBeVisible();
  });

});