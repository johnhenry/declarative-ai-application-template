import { test, describe } from "node:test";
import assert from "node:assert";
import { initGame } from "../src/game.mjs";

describe("Game Initialization", () => {
  test("should initialize the game without errors", async () => {
    await assert.doesNotReject(async () => initGame());
  });
});
