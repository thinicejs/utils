import { test } from "node:test";
import assert from "node:assert";
import { toNumber } from "./index.js";

test("toNumber converts null to 0", () => {
  assert.strictEqual(toNumber(null), 0);
});

test("toNumber converts undefined to 0", () => {
  assert.strictEqual(toNumber(undefined), 0);
});

test("toNumber converts booleans", () => {
  assert.strictEqual(toNumber(true), 1);
  assert.strictEqual(toNumber(false), 0);
});

test("toNumber converts strings", () => {
  assert.strictEqual(toNumber("123"), 123);
  assert.strictEqual(toNumber("123.45"), 123.45);
  assert.strictEqual(toNumber(""), 0);
  assert.strictEqual(toNumber("abc"), NaN);
});

test("toNumber returns numbers unchanged", () => {
  assert.strictEqual(toNumber(42), 42);
  assert.strictEqual(toNumber(3.14), 3.14);
  assert.strictEqual(toNumber(0), 0);
  assert.strictEqual(toNumber(-5), -5);
});

test("toNumber handles edge cases", () => {
  assert.strictEqual(toNumber([]), 0);
  assert.strictEqual(toNumber([1, 2, 3]), NaN);
  assert.strictEqual(toNumber({}), NaN);
});
