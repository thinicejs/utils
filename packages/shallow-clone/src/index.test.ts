import { test } from "node:test";
import assert from "node:assert";
import { shallowClone } from "./index.js";

test("shallowClone clones objects", () => {
  const input = { a: 1, b: 2, c: 3 };
  const output = shallowClone(input);
  assert.deepStrictEqual(output, input);
  assert.notStrictEqual(output, input);
});

test("shallowClone clones arrays", () => {
  const input = [1, 2, 3];
  const output = shallowClone(input);
  assert.deepStrictEqual(output, input);
  assert.notStrictEqual(output, input);
});

test("shallowClone is shallow", () => {
  const nested = { x: 1 };
  const input = { a: nested };
  const output = shallowClone(input);
  assert.strictEqual(output.a, nested);
});

test("shallowClone returns primitives unchanged", () => {
  assert.strictEqual(shallowClone(null), null);
  assert.strictEqual(shallowClone(123), 123);
  assert.strictEqual(shallowClone("hello"), "hello");
  assert.strictEqual(shallowClone(true), true);
});

test("shallowClone handles empty objects", () => {
  assert.deepStrictEqual(shallowClone({}), {});
  assert.deepStrictEqual(shallowClone([]), []);
});
