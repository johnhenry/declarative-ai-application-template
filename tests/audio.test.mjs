import { test, describe } from "node:test";
import assert from "node:assert";
import { initializeAudio } from "../src/audio.mjs";

describe("Audio Initialization", () => {
  test("should initialize audio without errors", async () => {
    assert.doesNotThrow(() => initializeAudio());
  });
});
