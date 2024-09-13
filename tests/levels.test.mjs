import { test, describe } from "node:test";
import assert from "node:assert";
import { loadLevels } from "../src/levels.mjs";

describe("Level Loading", () => {
  test("should load levels without errors", async () => {
    assert.doesNotThrow(() => loadLevels());
  });
});
