import { defineConfig } from '@playwright/test';

export default defineConfig({
  // E2Eテスト用のフォルダ指定
  testDir: './tests',
  // Vitest（src配下）のテストファイルを完全に無視する設定
  testIgnore: ['**/src/**'],
  testMatch: '**/*.spec.ts',
  
  fullyParallel: true,
  forbidOnly: false,
  retries: 2,
  workers: 1,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },

  /* 開発サーバーを自動起動する設定 */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});