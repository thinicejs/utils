import { test } from "node:test";
import assert from "node:assert";
import { pickDefined } from "./index.js";

test("pickDefined removes undefined values", () => {
  const input = { a: 1, b: undefined, c: 2, d: undefined };
  const output = pickDefined(input);
  assert.deepStrictEqual(output, { a: 1, c: 2 });
});

test("pickDefined keeps null values", () => {
  const input = { a: 1, b: null, c: undefined };
  const output = pickDefined(input);
  assert.deepStrictEqual(output, { a: 1, b: null });
});

test("pickDefined keeps falsy values", () => {
  const input = { a: 0, b: false, c: "", d: undefined };
  const output = pickDefined(input);
  assert.deepStrictEqual(output, { a: 0, b: false, c: "" });
});

test("pickDefined handles empty object", () => {
  assert.deepStrictEqual(pickDefined({}), {});
});

test("pickDefined handles all undefined", () => {
  assert.deepStrictEqual(pickDefined({ a: undefined, b: undefined }), {});
});
