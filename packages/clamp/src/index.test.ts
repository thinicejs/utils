import { test } from "node:test";
import assert from "node:assert";
import { clamp } from "./index.js";

test("clamp returns value when within range", () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(0, 0, 10), 0);
  assert.strictEqual(clamp(10, 0, 10), 10);
});

test("clamp returns min when value is below min", () => {
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(5, 10, 20), 10);
});

test("clamp returns max when value is above max", () => {
  assert.strictEqual(clamp(15, 0, 10), 10);
  assert.strictEqual(clamp(25, 0, 20), 20);
});

test("clamp handles negative ranges", () => {
  assert.strictEqual(clamp(-15, -10, -5), -10);
  assert.strictEqual(clamp(-3, -10, -5), -5);
  assert.strictEqual(clamp(-7, -10, -5), -7);
});

test("clamp throws when min > max", () => {
  assert.throws(() => clamp(5, 10, 0), /min must be less than or equal to max/);
});

test("clamp handles decimal values", () => {
  assert.strictEqual(clamp(3.14, 0, 5), 3.14);
  assert.strictEqual(clamp(6.28, 0, 5), 5);
  assert.strictEqual(clamp(-1.5, 0, 5), 0);
});
