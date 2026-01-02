import { test } from "node:test";
import assert from "node:assert";
import { isNotEmptyString } from "./index.js";

test("isNotEmptyString returns false for empty string", () => {
  assert.strictEqual(isNotEmptyString(""), false);
});

test("isNotEmptyString returns true for non-empty strings", () => {
  assert.strictEqual(isNotEmptyString(" "), true);
  assert.strictEqual(isNotEmptyString("a"), true);
  assert.strictEqual(isNotEmptyString("hello"), true);
});

test("isNotEmptyString returns true for non-strings", () => {
  assert.strictEqual(isNotEmptyString(null), true);
  assert.strictEqual(isNotEmptyString(undefined), true);
  assert.strictEqual(isNotEmptyString(0), true);
  assert.strictEqual(isNotEmptyString([]), true);
});

test("isNotEmptyString narrows type", () => {
  const value: unknown = "hello";
  if (isNotEmptyString(value)) {
    // TypeScript should know value is not empty string
    assert.strictEqual(value.length > 0, true);
  }
});
