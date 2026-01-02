import { test } from "node:test";
import assert from "node:assert";
import { identity } from "./index.js";

test("identity returns the same value", () => {
  assert.strictEqual(identity(42), 42);
  assert.strictEqual(identity("hello"), "hello");
  assert.strictEqual(identity(true), true);
  assert.strictEqual(identity(null), null);
  assert.strictEqual(identity(undefined), undefined);
});

test("identity returns same reference for objects", () => {
  const obj = { a: 1 };
  assert.strictEqual(identity(obj), obj);
});

test("identity returns same reference for arrays", () => {
  const arr = [1, 2, 3];
  assert.strictEqual(identity(arr), arr);
});

test("identity can be used in functional patterns", () => {
  const values = [1, 2, 3, null, 5];
  const filtered = values.filter(identity);
  assert.deepStrictEqual(filtered, [1, 2, 3, 5]);
});
