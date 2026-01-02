import { test } from "node:test";
import assert from "node:assert";
import { isNotNullish } from "./index.js";

test("isNotNullish returns false for null", () => {
  assert.strictEqual(isNotNullish(null), false);
});

test("isNotNullish returns false for undefined", () => {
  assert.strictEqual(isNotNullish(undefined), false);
});

test("isNotNullish returns true for non-nullish values", () => {
  assert.strictEqual(isNotNullish(""), true);
  assert.strictEqual(isNotNullish(0), true);
  assert.strictEqual(isNotNullish(false), true);
  assert.strictEqual(isNotNullish("hello"), true);
  assert.strictEqual(isNotNullish(123), true);
  assert.strictEqual(isNotNullish({}), true);
  assert.strictEqual(isNotNullish([]), true);
});

test("isNotNullish narrows type", () => {
  const value: string | null | undefined = "hello";
  if (isNotNullish(value)) {
    // TypeScript should know value is string here
    assert.strictEqual(value.toUpperCase(), "HELLO");
  }
});
