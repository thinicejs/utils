import { test } from "node:test";
import assert from "node:assert";
import { isArray } from "./index.js";

test("isArray returns true for arrays", () => {
  assert.strictEqual(isArray([]), true);
  assert.strictEqual(isArray([1, 2, 3]), true);
  assert.strictEqual(isArray(["a", "b"]), true);
  assert.strictEqual(isArray([null, undefined]), true);
});

test("isArray returns false for non-arrays", () => {
  assert.strictEqual(isArray(null), false);
  assert.strictEqual(isArray(undefined), false);
  assert.strictEqual(isArray({}), false);
  assert.strictEqual(isArray("string"), false);
  assert.strictEqual(isArray(123), false);
  assert.strictEqual(isArray(true), false);
});

test("isArray narrows type", () => {
  const value: unknown = [1, 2, 3];
  if (isArray<number>(value)) {
    assert.strictEqual(value.length, 3);
    assert.strictEqual(value[0], 1);
  }
});
