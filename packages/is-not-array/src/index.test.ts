import { test } from "node:test";
import assert from "node:assert";
import { isNotArray } from "./index.js";

test("isNotArray returns false for arrays", () => {
  assert.strictEqual(isNotArray([]), false);
  assert.strictEqual(isNotArray([1, 2, 3]), false);
  assert.strictEqual(isNotArray(["a", "b"]), false);
});

test("isNotArray returns true for non-arrays", () => {
  assert.strictEqual(isNotArray(null), true);
  assert.strictEqual(isNotArray(undefined), true);
  assert.strictEqual(isNotArray({}), true);
  assert.strictEqual(isNotArray("string"), true);
  assert.strictEqual(isNotArray(123), true);
  assert.strictEqual(isNotArray(true), true);
});

test("isNotArray narrows type", () => {
  const value: unknown = { a: 1 };
  if (isNotArray(value)) {
    // TypeScript should know value is not array
    assert.ok(!Array.isArray(value));
  }
});
