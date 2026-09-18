import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// 全テスト開始前にサーバー起動
beforeAll(() => server.listen());

// 各テスト終了時にハンドラーをリセット（他のテストへ影響しないようにする）
afterEach(() => server.resetHandlers());

// 全テスト終了後にサーバー停止
afterAll(() => server.close());