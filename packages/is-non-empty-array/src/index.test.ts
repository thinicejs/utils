import { test } from "node:test";
import assert from "node:assert";
import { isNonEmptyArray } from "./index.js";

test("isNonEmptyArray returns true for non-empty arrays", () => {
  assert.strictEqual(isNonEmptyArray([1]), true);
  assert.strictEqual(isNonEmptyArray([1, 2, 3]), true);
  assert.strictEqual(isNonEmptyArray(["a"]), true);
});

test("isNonEmptyArray returns false for empty arrays", () => {
  assert.strictEqual(isNonEmptyArray([]), false);
});

test("isNonEmptyArray returns false for non-arrays", () => {
  assert.strictEqual(isNonEmptyArray(null), false);
  assert.strictEqual(isNonEmptyArray(undefined), false);
  assert.strictEqual(isNonEmptyArray({}), false);
  assert.strictEqual(isNonEmptyArray(""), false);
  assert.strictEqual(isNonEmptyArray(123), false);
});

test("isNonEmptyArray narrows type", () => {
  const value: unknown = [1, 2, 3];
  if (isNonEmptyArray<number>(value)) {
    assert.strictEqual(value.length, 3);
    assert.strictEqual(value[0], 1);
  }
});
