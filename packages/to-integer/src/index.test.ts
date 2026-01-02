import { test } from "node:test";
import assert from "node:assert";
import { toInteger } from "./index.js";

test("toInteger truncates decimals", () => {
  assert.strictEqual(toInteger(123.45), 123);
  assert.strictEqual(toInteger(123.99), 123);
  assert.strictEqual(toInteger(-123.45), -123);
  assert.strictEqual(toInteger(-123.99), -123);
});

test("toInteger handles integers", () => {
  assert.strictEqual(toInteger(123), 123);
  assert.strictEqual(toInteger(0), 0);
  assert.strictEqual(toInteger(-5), -5);
});

test("toInteger converts strings", () => {
  assert.strictEqual(toInteger("123.45"), 123);
  assert.strictEqual(toInteger("123"), 123);
  assert.strictEqual(toInteger(""), 0);
});

test("toInteger handles null and undefined", () => {
  assert.strictEqual(toInteger(null), 0);
  assert.strictEqual(toInteger(undefined), 0);
});

test("toInteger handles booleans", () => {
  assert.strictEqual(toInteger(true), 1);
  assert.strictEqual(toInteger(false), 0);
});

test("toInteger handles NaN", () => {
  assert.ok(isNaN(toInteger("abc")));
  assert.ok(isNaN(toInteger({})));
});
