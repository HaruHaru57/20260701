import { useState, useEffect } from "react";

// ジェネリクス <T> を使って、どんな型のデータでも扱えるように定義
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // ① 初期値の取得（LocalStorage にデータがあればそれを優先、無ければ initialValue）
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // ② State が変化したら LocalStorage に保存
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  // ③ タプル型 [T, (value: T) => void] として返却
  return [storedValue, setStoredValue];
}