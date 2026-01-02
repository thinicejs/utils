import { test } from "node:test";
import assert from "node:assert";
import { isEmptyString } from "./index.js";

test("isEmptyString returns true for empty string", () => {
  assert.strictEqual(isEmptyString(""), true);
});

test("isEmptyString returns false for non-empty strings", () => {
  assert.strictEqual(isEmptyString(" "), false);
  assert.strictEqual(isEmptyString("a"), false);
  assert.strictEqual(isEmptyString("hello"), false);
});

test("isEmptyString returns false for non-strings", () => {
  assert.strictEqual(isEmptyString(null), false);
  assert.strictEqual(isEmptyString(undefined), false);
  assert.strictEqual(isEmptyString(0), false);
  assert.strictEqual(isEmptyString([]), false);
});
