import { test } from "node:test";
import assert from "node:assert";
import { isString } from "./index.js";

test("isString returns true for strings", () => {
  assert.strictEqual(isString("hello"), true);
  assert.strictEqual(isString(""), true);
  assert.strictEqual(isString("123"), true);
  assert.strictEqual(isString(" "), true);
});

test("isString returns false for non-strings", () => {
  assert.strictEqual(isString(42), false);
  assert.strictEqual(isString(null), false);
  assert.strictEqual(isString(undefined), false);
  assert.strictEqual(isString(true), false);
  assert.strictEqual(isString(false), false);
  assert.strictEqual(isString({}), false);
  assert.strictEqual(isString([]), false);
  assert.strictEqual(isString(() => {}), false);
});

test("isString works with type narrowing", () => {
  const value: unknown = "hello";
  if (isString(value)) {
    // TypeScript should know value is string here
    assert.strictEqual(value.toUpperCase(), "HELLO");
  } else {
    assert.fail("Type narrowing failed");
  }
});

test("isString returns false for String objects", () => {
  assert.strictEqual(isString(new String("hello")), false);
});

test("isString returns false for string-like values", () => {
  assert.strictEqual(isString(0), false);
  assert.strictEqual(isString(NaN), false);
  assert.strictEqual(isString(Infinity), false);
});

