import { test } from "node:test";
import assert from "node:assert";
import { safeJsonParse } from "./index.js";

test("safeJsonParse parses valid JSON", () => {
  assert.deepStrictEqual(safeJsonParse('{"a": 1}'), { a: 1 });
  assert.deepStrictEqual(safeJsonParse('[1, 2, 3]'), [1, 2, 3]);
  assert.deepStrictEqual(safeJsonParse('"hello"'), "hello");
  assert.deepStrictEqual(safeJsonParse("123"), 123);
  assert.deepStrictEqual(safeJsonParse("true"), true);
  assert.deepStrictEqual(safeJsonParse("null"), null);
});

test("safeJsonParse returns undefined for invalid JSON", () => {
  assert.strictEqual(safeJsonParse("invalid json"), undefined);
  assert.strictEqual(safeJsonParse("{"), undefined);
  assert.strictEqual(safeJsonParse(""), undefined);
  assert.strictEqual(safeJsonParse("undefined"), undefined);
});

test("safeJsonParse handles empty string", () => {
  assert.strictEqual(safeJsonParse(""), undefined);
});

test("safeJsonParse preserves types", () => {
  const result = safeJsonParse<{ a: number }>('{"a": 1}');
  assert.deepStrictEqual(result, { a: 1 });
});
