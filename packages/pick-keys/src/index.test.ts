import { test } from "node:test";
import assert from "node:assert";
import { pickKeys } from "./index.js";

test("pickKeys picks specified keys", () => {
  const input = { a: 1, b: 2, c: 3, d: 4 };
  const output = pickKeys(input, ["a", "c"]);
  assert.deepStrictEqual(output, { a: 1, c: 3 });
});

test("pickKeys handles empty keys array", () => {
  const input = { a: 1, b: 2 };
  const output = pickKeys(input, []);
  assert.deepStrictEqual(output, {});
});

test("pickKeys ignores keys that don't exist", () => {
  const input: Record<string, unknown> = { a: 1, b: 2 };
  const output = pickKeys(input, ["a", "c", "d"]);
  assert.deepStrictEqual(output, { a: 1 });
});

test("pickKeys handles all keys", () => {
  const input = { a: 1, b: 2, c: 3 };
  const output = pickKeys(input, ["a", "b", "c"]);
  assert.deepStrictEqual(output, input);
});

test("pickKeys preserves undefined values", () => {
  const input = { a: 1, b: undefined, c: 3 };
  const output = pickKeys(input, ["a", "b"]);
  assert.deepStrictEqual(output, { a: 1, b: undefined });
});
