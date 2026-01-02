import { test } from "node:test";
import assert from "node:assert";
import { flattenShallow } from "./index.js";

test("flattenShallow flattens one level", () => {
  assert.deepStrictEqual(flattenShallow([[1, 2], [3, 4]]), [1, 2, 3, 4]);
  assert.deepStrictEqual(flattenShallow([[1, 2], 3, [4, 5]]), [1, 2, 3, 4, 5]);
});

test("flattenShallow handles empty arrays", () => {
  assert.deepStrictEqual(flattenShallow([]), []);
  assert.deepStrictEqual(flattenShallow([[], [1, 2]]), [1, 2]);
});

test("flattenShallow handles non-array items", () => {
  assert.deepStrictEqual(flattenShallow([1, [2, 3], 4]), [1, 2, 3, 4]);
});

test("flattenShallow does not flatten deeply nested arrays", () => {
  assert.deepStrictEqual(flattenShallow([[1, [2, 3]], [4]]), [1, [2, 3], 4]);
});

test("flattenShallow handles mixed types", () => {
  assert.deepStrictEqual(flattenShallow([["a", "b"], "c", ["d"]]), ["a", "b", "c", "d"]);
});
