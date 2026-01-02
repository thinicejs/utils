import { test } from "node:test";
import assert from "node:assert";
import { toFloat } from "./index.js";

test("toFloat parses float strings", () => {
  assert.strictEqual(toFloat("123.45"), 123.45);
  assert.strictEqual(toFloat("123"), 123);
  assert.strictEqual(toFloat("123.456"), 123.456);
  assert.strictEqual(toFloat("-123.45"), -123.45);
});

test("toFloat returns numbers unchanged", () => {
  assert.strictEqual(toFloat(123.45), 123.45);
  assert.strictEqual(toFloat(123), 123);
  assert.strictEqual(toFloat(0), 0);
  assert.strictEqual(toFloat(-5.5), -5.5);
});

test("toFloat handles null and undefined", () => {
  assert.ok(isNaN(toFloat(null)));
  assert.ok(isNaN(toFloat(undefined)));
});

test("toFloat handles invalid strings", () => {
  assert.ok(isNaN(toFloat("abc")));
  assert.ok(isNaN(toFloat("")));
  assert.strictEqual(toFloat("123abc"), 123); // parseFloat behavior
});

test("toFloat handles booleans", () => {
  assert.ok(isNaN(toFloat(true)));
  assert.ok(isNaN(toFloat(false)));
});

test("toFloat handles objects", () => {
  assert.ok(isNaN(toFloat({})));
  assert.ok(isNaN(toFloat([])));
});
