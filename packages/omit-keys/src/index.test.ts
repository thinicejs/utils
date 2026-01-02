import { test } from "node:test";
import assert from "node:assert";
import { omitKeys } from "./index.js";

test("omitKeys omits specified keys", () => {
  const input = { a: 1, b: 2, c: 3, d: 4 };
  const output = omitKeys(input, ["a", "c"]);
  assert.deepStrictEqual(output, { b: 2, d: 4 });
});

test("omitKeys handles empty keys array", () => {
  const input = { a: 1, b: 2 };
  const output = omitKeys(input, []);
  assert.deepStrictEqual(output, input);
});

test("omitKeys ignores keys that don't exist", () => {
  const input: Record<string, unknown> = { a: 1, b: 2 };
  const output = omitKeys(input, ["c", "d"]);
  assert.deepStrictEqual(output, input);
});

test("omitKeys handles all keys", () => {
  const input = { a: 1, b: 2, c: 3 };
  const output = omitKeys(input, ["a", "b", "c"]);
  assert.deepStrictEqual(output, {});
});

test("omitKeys handles partial key list", () => {
  const input = { a: 1, b: 2, c: 3 };
  const output = omitKeys(input, ["b"]);
  assert.deepStrictEqual(output, { a: 1, c: 3 });
});
