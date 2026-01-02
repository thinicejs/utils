import { test } from "node:test";
import assert from "node:assert";
import { toString } from "./index.js";

test("toString converts null to empty string", () => {
  assert.strictEqual(toString(null), "");
});

test("toString converts undefined to empty string", () => {
  assert.strictEqual(toString(undefined), "");
});

test("toString converts other values using String()", () => {
  assert.strictEqual(toString(123), "123");
  assert.strictEqual(toString(true), "true");
  assert.strictEqual(toString(false), "false");
  assert.strictEqual(toString(0), "0");
  assert.strictEqual(toString("hello"), "hello");
});

test("toString handles objects", () => {
  assert.strictEqual(toString({}), "[object Object]");
  assert.strictEqual(toString([]), "");
  assert.strictEqual(toString([1, 2, 3]), "1,2,3");
});
