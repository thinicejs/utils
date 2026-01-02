import { test } from "node:test";
import assert from "node:assert";
import { isBoolean } from "./index.js";

test("isBoolean returns true for booleans", () => {
  assert.strictEqual(isBoolean(true), true);
  assert.strictEqual(isBoolean(false), true);
});

test("isBoolean returns false for non-booleans", () => {
  assert.strictEqual(isBoolean(0), false);
  assert.strictEqual(isBoolean(1), false);
  assert.strictEqual(isBoolean("true"), false);
  assert.strictEqual(isBoolean("false"), false);
  assert.strictEqual(isBoolean(null), false);
  assert.strictEqual(isBoolean(undefined), false);
  assert.strictEqual(isBoolean({}), false);
  assert.strictEqual(isBoolean([]), false);
});

test("isBoolean narrows type", () => {
  const value: unknown = true;
  if (isBoolean(value)) {
    assert.strictEqual(value, true);
    assert.strictEqual(typeof value, "boolean");
  }
});
