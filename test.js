const test = require("node:test");
const assert = require("node:assert");

// Mock localStorage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value.toString();
  },
  clear() {
    this.store = {};
  },
};

// Import the functions to test
const { addTodo, toggleTodo, deleteTodo, todos } = require("./script.js");

test("Todo functionality", async (t) => {
  await t.test("addTodo adds a new todo", () => {
    todos.length = 0; // Clear todos array
    addTodo("Test todo");
    assert.strictEqual(todos.length, 1);
    assert.strictEqual(todos[0].text, "Test todo");
    assert.strictEqual(todos[0].completed, false);
  });

  await t.test("toggleTodo changes completion status", () => {
    todos.length = 0; // Clear todos array
    addTodo("Test todo");
    toggleTodo(0);
    assert.strictEqual(todos[0].completed, true);
  });

  await t.test("deleteTodo removes a todo", () => {
    todos.length = 0; // Clear todos array
    addTodo("Test todo");
    deleteTodo(0);
    assert.strictEqual(todos.length, 0);
  });
});
