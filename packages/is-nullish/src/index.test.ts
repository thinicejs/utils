import { test } from "node:test";
import assert from "node:assert";
import { isNullish } from "./index.js";

test("isNullish returns true for null", () => {
  assert.strictEqual(isNullish(null), true);
});

test("isNullish returns true for undefined", () => {
  assert.strictEqual(isNullish(undefined), true);
});

test("isNullish returns false for falsy but not nullish values", () => {
  assert.strictEqual(isNullish(""), false);
  assert.strictEqual(isNullish(0), false);
  assert.strictEqual(isNullish(false), false);
  assert.strictEqual(isNullish(NaN), false);
});

test("isNullish returns false for truthy values", () => {
  assert.strictEqual(isNullish("hello"), false);
  assert.strictEqual(isNullish(42), false);
  assert.strictEqual(isNullish(true), false);
  assert.strictEqual(isNullish({}), false);
  assert.strictEqual(isNullish([]), false);
});

test("isNullish works with type narrowing", () => {
  const value: string | null | undefined = "hello";
  if (!isNullish(value)) {
    // TypeScript should know value is string here
    assert.strictEqual(value.toUpperCase(), "HELLO");
  }

  const nullValue: string | null | undefined = null;
  if (isNullish(nullValue)) {
    // TypeScript should know value is null | undefined here
    assert.strictEqual(nullValue, null);
  }
});

test("isNullish matches nullish coalescing behavior", () => {
  // isNullish should match what ?? considers nullish
  assert.strictEqual(isNullish(null), true);
  assert.strictEqual(isNullish(undefined), true);
  // These values are not nullish, so ?? would use them, not the default
  assert.strictEqual(isNullish(""), false);
  assert.strictEqual(isNullish(0), false);
  assert.strictEqual(isNullish(false), false);
});
