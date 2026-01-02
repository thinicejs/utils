import { test } from "node:test";
import assert from "node:assert";
import { hasOwn } from "./index.js";

test("hasOwn returns true for own properties", () => {
  const obj = { foo: "bar", baz: 42 };
  assert.strictEqual(hasOwn(obj, "foo"), true);
  assert.strictEqual(hasOwn(obj, "baz"), true);
});

test("hasOwn returns false for inherited properties", () => {
  const obj = { foo: "bar" };
  assert.strictEqual(hasOwn(obj, "toString"), false);
  assert.strictEqual(hasOwn(obj, "valueOf"), false);
  assert.strictEqual(hasOwn(obj, "constructor"), false);
});

test("hasOwn returns false for non-existent properties", () => {
  const obj = { foo: "bar" };
  assert.strictEqual(hasOwn(obj, "nonexistent"), false);
});

test("hasOwn works with null prototypes", () => {
  const obj = Object.create(null);
  obj.foo = "bar";
  assert.strictEqual(hasOwn(obj, "foo"), true);
  assert.strictEqual(hasOwn(obj, "toString"), false);
});

test("hasOwn works with empty objects", () => {
  const obj = {};
  assert.strictEqual(hasOwn(obj, "foo"), false);
});

test("hasOwn works with symbol keys", () => {
  const sym = Symbol("test");
  const obj = { [sym]: "value" };
  assert.strictEqual(hasOwn(obj, sym), true);
  assert.strictEqual(hasOwn(obj, Symbol("other")), false);
});

test("hasOwn works with numeric string keys", () => {
  const obj = { "0": "zero", "1": "one" };
  assert.strictEqual(hasOwn(obj, "0"), true);
  assert.strictEqual(hasOwn(obj, "1"), true);
});

