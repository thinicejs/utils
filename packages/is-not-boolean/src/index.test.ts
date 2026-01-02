import { test } from "node:test";
import assert from "node:assert";
import { isNotBoolean } from "./index.js";

test("isNotBoolean returns false for booleans", () => {
  assert.strictEqual(isNotBoolean(true), false);
  assert.strictEqual(isNotBoolean(false), false);
});

test("isNotBoolean returns true for non-booleans", () => {
  assert.strictEqual(isNotBoolean(0), true);
  assert.strictEqual(isNotBoolean(1), true);
  assert.strictEqual(isNotBoolean("true"), true);
  assert.strictEqual(isNotBoolean("false"), true);
  assert.strictEqual(isNotBoolean(null), true);
  assert.strictEqual(isNotBoolean(undefined), true);
  assert.strictEqual(isNotBoolean({}), true);
  assert.strictEqual(isNotBoolean([]), true);
});

test("isNotBoolean narrows type", () => {
  const value: unknown = 42;
  if (isNotBoolean(value)) {
    // TypeScript should know value is not boolean
    assert.ok(typeof value !== "boolean");
  }
});
