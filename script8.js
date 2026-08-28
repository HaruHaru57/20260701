const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

// 1. LocalStorageから保存済みタスクを取得（無ければ空配列）
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 画面にタスク一覧を描画する関数
const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todoText, index) => {
    const li = document.createElement("li");
    li.textContent = todoText;

    // 削除ボタンの作成
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.className = "delete-btn";
    
    // 削除処理
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1); // 配列から削除
      saveAndRender();        // 保存して再描画
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
};

// データをLocalStorageに保存して再描画する関数
const saveAndRender = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
};

// タスク追加イベント
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    todos.push(text);
    todoInput.value = "";
    saveAndRender();
  }
});

// 初期表示時に保存データを表示
renderTodos();