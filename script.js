let todos = [];
let todoList;

function saveTodos() {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function renderTodos() {
  if (todoList) {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="${todo.completed ? "completed" : ""}">${
        todo.text
      }</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
      li.addEventListener("click", () => toggleTodo(index));
      todoList.appendChild(li);
    });
  }
}

function addTodo(text) {
  todos.push({ text, completed: false });
  saveTodos();
  renderTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    todoList = document.getElementById("todo-list");

    todos = JSON.parse(localStorage.getItem("todos")) || [];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (text !== "") {
        addTodo(text);
        input.value = "";
      }
    });

    todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const index = parseInt(e.target.getAttribute("data-index"), 10);
        deleteTodo(index);
      }
    });

    renderTodos();
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { addTodo, toggleTodo, deleteTodo, todos };
}
