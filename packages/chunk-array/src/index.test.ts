import { test } from "node:test";
import assert from "node:assert";
import { chunkArray } from "./index.js";

test("chunkArray splits into chunks", () => {
  assert.deepStrictEqual(chunkArray([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepStrictEqual(chunkArray([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test("chunkArray handles exact multiples", () => {
  assert.deepStrictEqual(chunkArray([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]]);
});

test("chunkArray handles size larger than array", () => {
  assert.deepStrictEqual(chunkArray([1, 2, 3], 10), [[1, 2, 3]]);
});

test("chunkArray handles empty array", () => {
  assert.deepStrictEqual(chunkArray([], 2), []);
});

test("chunkArray handles size 1", () => {
  assert.deepStrictEqual(chunkArray([1, 2, 3], 1), [[1], [2], [3]]);
});

test("chunkArray returns empty array for size <= 0", () => {
  assert.deepStrictEqual(chunkArray([1, 2, 3], 0), []);
  assert.deepStrictEqual(chunkArray([1, 2, 3], -1), []);
});
