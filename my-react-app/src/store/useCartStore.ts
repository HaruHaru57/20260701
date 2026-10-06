import { useState, useEffect } from "react";

// ① カートアイテムとストアの型定義
export interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// ② シンプルなグローバル状態保持オブジェクト
let globalItems: CartItem[] = [];
const listeners = new Set<() => void>();

const notify = () => listeners.forEach((listener) => listener());

// ③ Zustand 風のカスタムフック
export function useCartStore(): CartState {
  const [items, setItems] = useState<CartItem[]>(globalItems);

  useEffect(() => {
    const listener = () => setItems([...globalItems]);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return {
    items,
    addItem: (item: CartItem) => {
      globalItems = [...globalItems, item];
      notify();
    },
    removeItem: (id: string) => {
      globalItems = globalItems.filter((i) => i.id !== id);
      notify();
    },
    clearCart: () => {
      globalItems = [];
      notify();
    },
  };
}