import { test, describe } from "node:test";
import assert from "node:assert";
import { renderGraphics } from "../src/graphics.mjs";

describe("Graphics Rendering", () => {
  test("should render graphics without errors", async () => {
    assert.doesNotThrow(() => renderGraphics());
  });
});
