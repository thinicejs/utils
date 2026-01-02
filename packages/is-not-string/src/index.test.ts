import { test } from "node:test";
import assert from "node:assert";
import { isNotString } from "./index.js";

test("isNotString returns false for strings", () => {
  assert.strictEqual(isNotString("hello"), false);
  assert.strictEqual(isNotString(""), false);
  assert.strictEqual(isNotString("123"), false);
});

test("isNotString returns true for non-strings", () => {
  assert.strictEqual(isNotString(123), true);
  assert.strictEqual(isNotString(null), true);
  assert.strictEqual(isNotString(undefined), true);
  assert.strictEqual(isNotString(true), true);
  assert.strictEqual(isNotString({}), true);
  assert.strictEqual(isNotString([]), true);
});

test("isNotString narrows type", () => {
  const value: unknown = 42;
  if (isNotString(value)) {
    // TypeScript should know value is not string here
    assert.ok(typeof value !== "string");
  }
});
