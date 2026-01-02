import { test } from "node:test";
import assert from "node:assert";
import { omitNullish } from "./index.js";

test("omitNullish removes null and undefined", () => {
  const input = { a: 1, b: null, c: 2, d: undefined };
  const output = omitNullish(input);
  assert.deepStrictEqual(output, { a: 1, c: 2 });
});

test("omitNullish keeps falsy values", () => {
  const input = { a: 0, b: false, c: "", d: null, e: undefined };
  const output = omitNullish(input);
  assert.deepStrictEqual(output, { a: 0, b: false, c: "" });
});

test("omitNullish handles empty object", () => {
  assert.deepStrictEqual(omitNullish({}), {});
});

test("omitNullish handles all nullish", () => {
  assert.deepStrictEqual(omitNullish({ a: null, b: undefined }), {});
});

test("omitNullish keeps NaN", () => {
  const input = { a: NaN, b: null };
  const output = omitNullish(input);
  assert.deepStrictEqual(output, { a: NaN });
});
