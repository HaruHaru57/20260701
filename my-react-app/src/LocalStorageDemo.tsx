import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const LocalStorageDemo: React.FC = () => {
  // string 型のデータを永続化
  const [name, setName] = useLocalStorage<string>("username", "ゲスト");

  // boolean 型のデータを永続化
  const [isNotificationOn, setIsNotificationOn] = useLocalStorage<boolean>(
    "notification_setting",
    true
  );

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>💾 カスタムフック（useLocalStorage）</h3>
      
      <div style={{ marginBottom: "16px" }}>
        <label>
          ユーザー名:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "6px" }}
          />
        </label>
      </div>

      <div>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={isNotificationOn}
            onChange={(e) => setIsNotificationOn(e.target.checked)}
          />
          {" "}通知を有効にする ({isNotificationOn ? "ON" : "OFF"})
        </label>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "12px" }}>
        ※文字を入力したりチェックを変更してリロードしても状態が維持されます。
      </p>
    </div>
  );
};