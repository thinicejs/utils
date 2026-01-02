import { test } from "node:test";
import assert from "node:assert";
import { isNotNumber } from "./index.js";

test("isNotNumber returns false for numbers", () => {
  assert.strictEqual(isNotNumber(0), false);
  assert.strictEqual(isNotNumber(123), false);
  assert.strictEqual(isNotNumber(-456), false);
  assert.strictEqual(isNotNumber(3.14), false);
  assert.strictEqual(isNotNumber(Infinity), false);
});

test("isNotNumber returns true for NaN", () => {
  assert.strictEqual(isNotNumber(NaN), true);
});

test("isNotNumber returns true for non-numbers", () => {
  assert.strictEqual(isNotNumber("123"), true);
  assert.strictEqual(isNotNumber(null), true);
  assert.strictEqual(isNotNumber(undefined), true);
  assert.strictEqual(isNotNumber(true), true);
  assert.strictEqual(isNotNumber({}), true);
  assert.strictEqual(isNotNumber([]), true);
});

test("isNotNumber narrows type", () => {
  const value: unknown = "hello";
  if (isNotNumber(value)) {
    // TypeScript should know value is not number
    assert.ok(typeof value !== "number");
  }
});
