import { test } from "node:test";
import assert from "node:assert";
import { capitalize } from "./index.js";

test("capitalize capitalizes first letter", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
  assert.strictEqual(capitalize("world"), "World");
  assert.strictEqual(capitalize("test"), "Test");
});

test("capitalize handles already capitalized", () => {
  assert.strictEqual(capitalize("Hello"), "Hello");
  assert.strictEqual(capitalize("WORLD"), "WORLD");
});

test("capitalize handles empty string", () => {
  assert.strictEqual(capitalize(""), "");
});

test("capitalize handles single character", () => {
  assert.strictEqual(capitalize("a"), "A");
  assert.strictEqual(capitalize("A"), "A");
});

test("capitalize handles strings starting with numbers", () => {
  assert.strictEqual(capitalize("123abc"), "123abc");
});

test("capitalize handles strings starting with special characters", () => {
  assert.strictEqual(capitalize("!hello"), "!hello");
  assert.strictEqual(capitalize("@test"), "@test");
});
