import { test } from "node:test";
import assert from "node:assert";
import { dedupeShallow } from "./index.js";

test("dedupeShallow removes duplicates", () => {
  assert.deepStrictEqual(dedupeShallow([1, 2, 2, 3, 3, 3]), [1, 2, 3]);
  assert.deepStrictEqual(dedupeShallow(["a", "b", "a", "c"]), ["a", "b", "c"]);
});

test("dedupeShallow handles empty array", () => {
  assert.deepStrictEqual(dedupeShallow([]), []);
});

test("dedupeShallow handles no duplicates", () => {
  assert.deepStrictEqual(dedupeShallow([1, 2, 3]), [1, 2, 3]);
});

test("dedupeShallow does not dedupe objects (shallow)", () => {
  const obj = { a: 1 };
  const input = [obj, obj, { a: 1 }];
  const output = dedupeShallow(input);
  assert.strictEqual(output.length, 2);
  assert.strictEqual(output[0], obj);
  // Second item is the different object with same structure
  assert.notStrictEqual(output[1], obj);
  assert.deepStrictEqual(output[1], { a: 1 });
});

test("dedupeShallow preserves order", () => {
  assert.deepStrictEqual(dedupeShallow([3, 1, 2, 1, 3]), [3, 1, 2]);
});
