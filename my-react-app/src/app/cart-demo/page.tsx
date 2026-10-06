"use client";

import React from "react";
import { useCartStore, CartItem } from "../../store/useCartStore";

const PRODUCTS: CartItem[] = [
  { id: "1", name: "Next.js 完全ガイド", price: 3200 },
  { id: "2", name: "TypeScript 実践入門", price: 2800 },
  { id: "3", name: "Tailwind CSS デザインパターン", price: 2400 },
];

export default function CartDemoPage() {
  const { items, addItem, removeItem, clearCart } = useCartStore();

const totalPrice = items.reduce((sum: number, item: CartItem) => sum + item.price, 0);

  return (
    <div>
      <h3 style={{ margin: "0 0 8px 0", color: "#0f172a" }}>🛒 Zustand グローバル状態管理演習</h3>
      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "16px" }}>
        Provider 不要でどこからでも直接グローバルな State を読み書きできます。
      </p>

      {/* 商品リスト */}
      <div style={{ marginBottom: "24px" }}>
        <h4>商品一覧</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
              }}
            >
              <span>{prod.name} (¥{prod.price.toLocaleString()})</span>
              <button
                onClick={() => addItem(prod)}
                style={{
                  padding: "4px 12px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                カートに追加
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* カートの中身 */}
      <div style={{ padding: "16px", backgroundColor: "#f8fafc", borderRadius: "8px", border: "1px solid #cbd5e1" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h4 style={{ margin: 0 }}>現在のカート ({items.length}点)</h4>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "0.85rem" }}
            >
              カートを空にする
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>カートに商品はありません。</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px 0" }}>
           {items.map((item: CartItem, index: number) => (
              <li
                key={`${item.id}-${index}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "6px 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <span>{item.name} - ¥{item.price.toLocaleString()}</span>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer", fontSize: "0.8rem" }}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        )}

        <div style={{ borderTop: "2px solid #e2e8f0", paddingTop: "8px", fontWeight: "bold", textAlign: "right" }}>
          合計金額: ¥{totalPrice.toLocaleString()}
        </div>
      </div>
    </div>
  );
}