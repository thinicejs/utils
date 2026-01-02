import { test } from "node:test";
import assert from "node:assert";
import { isNumber } from "./index.js";

test("isNumber returns true for numbers", () => {
  assert.strictEqual(isNumber(0), true);
  assert.strictEqual(isNumber(123), true);
  assert.strictEqual(isNumber(-456), true);
  assert.strictEqual(isNumber(3.14), true);
  assert.strictEqual(isNumber(Infinity), true);
  assert.strictEqual(isNumber(-Infinity), true);
});

test("isNumber returns false for NaN", () => {
  assert.strictEqual(isNumber(NaN), false);
});

test("isNumber returns false for non-numbers", () => {
  assert.strictEqual(isNumber("123"), false);
  assert.strictEqual(isNumber(null), false);
  assert.strictEqual(isNumber(undefined), false);
  assert.strictEqual(isNumber(true), false);
  assert.strictEqual(isNumber({}), false);
  assert.strictEqual(isNumber([]), false);
});

test("isNumber narrows type", () => {
  const value: unknown = 42;
  if (isNumber(value)) {
    assert.strictEqual(value.toFixed(2), "42.00");
  }
});
