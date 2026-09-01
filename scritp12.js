class Task {
  // コンストラクタ：初期化処理
  constructor(title, category) {
    this.title = title;
    this.category = category;
    this.completed = false; // 初期状態は未完了
    this.createdAt = new Date().toLocaleTimeString();
  }

  // メソッド（機能）：タスクを完了状態にする
  toggleComplete() {
    this.completed = !this.completed;
  }

  // メソッド：HTMLカード表現を返す
  render() {
    const statusText = this.completed ? "✅ 完了" : "⏳ 進行中";
    return `
      <div class="card">
        <h3>${this.title} [${this.category}]</h3>
        <p>状態: <span class="status">${statusText}</span></p>
        <p><small>作成時刻: ${this.createdAt}</small></p>
      </div>
    `;
  }
}

// 2. new キーワードでインスタンス（実体）を生成
const task1 = new Task("基本的なHTML・CSSの復習", "Web制作");
const task2 = new Task("FP3級の勉強スケジュール作成", "資格学習");

// 動作確認：1つ目のタスクを完了にする
task1.toggleComplete();

console.log("タスク1の実体:", task1);
console.log("タスク2の実体:", task2);

// 3. 画面に描画
const container = document.querySelector("#task-container");
container.innerHTML = task1.render() + task2.render();