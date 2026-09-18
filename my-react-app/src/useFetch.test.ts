import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFetch } from './useFetch'; // ※既存のuseFetchのパスに合わせて変更してください

describe('useFetch の API モックテスト', () => {
  it('APIからデータを正しく取得できること', async () => {
    const { result } = renderHook(() =>
      useFetch('https://jsonplaceholder.typicode.com/users/1')
    );

    // 非同期通信（fetch）の完了を待つ
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // MSW が返したダミーデータ（テストユーザー）が入っているか検証
    expect(result.current.data).toEqual({
      id: 1,
      name: 'テストユーザー',
      email: 'test@example.com',
    });
    expect(result.current.error).toBeNull();
  });
});