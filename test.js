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

// Mock DOM elements
global.document = {
  getElementById: () => ({
    addEventListener: () => {},
    innerHTML: "",
  }),
  createElement: () => ({
    innerHTML: "",
    addEventListener: () => {},
  }),
  addEventListener: () => {},
};

// Import the functions to test
require("./script.js");

test("Todo functionality", async (t) => {
  await t.test("addTodo adds a new todo", () => {
    global.todos = [];
    global.addTodo("Test todo");
    assert.strictEqual(global.todos.length, 1);
    assert.strictEqual(global.todos[0].text, "Test todo");
    assert.strictEqual(global.todos[0].completed, false);
  });

  await t.test("toggleTodo changes completion status", () => {
    global.todos = [{ text: "Test todo", completed: false }];
    global.toggleTodo(0);
    assert.strictEqual(global.todos[0].completed, true);
  });

  await t.test("deleteTodo removes a todo", () => {
    global.todos = [{ text: "Test todo", completed: false }];
    global.deleteTodo(0);
    assert.strictEqual(global.todos.length, 0);
  });
});
