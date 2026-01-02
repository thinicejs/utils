import { test } from "node:test";
import assert from "node:assert";
import { ensureTrailingNewline } from "./index.js";

test("ensureTrailingNewline adds newline if missing", () => {
  assert.strictEqual(ensureTrailingNewline("hello"), "hello\n");
  assert.strictEqual(ensureTrailingNewline("world"), "world\n");
});

test("ensureTrailingNewline doesn't add if already present", () => {
  assert.strictEqual(ensureTrailingNewline("hello\n"), "hello\n");
  assert.strictEqual(ensureTrailingNewline("world\n"), "world\n");
});

test("ensureTrailingNewline handles empty string", () => {
  assert.strictEqual(ensureTrailingNewline(""), "\n");
});

test("ensureTrailingNewline handles multiple newlines", () => {
  assert.strictEqual(ensureTrailingNewline("hello\n\n"), "hello\n\n");
});
