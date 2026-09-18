import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter のテスト', () => {
  it('初期値が正しく設定されること', () => {
    // フックを呼び出す
    const { result } = renderHook(() => useCounter(10));
    
    // 現在の状態（count）を検証
    expect(result.current.count).toBe(10);
  });

  it('increment を呼び出すと count が 1 増えること', () => {
    const { result } = renderHook(() => useCounter(0));

    // 状態を更新する関数を実行する時は act() で囲む
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});