import { test } from "node:test";
import assert from "node:assert";
import { normalizeLineEndings } from "./index.js";

test("normalizeLineEndings converts CRLF to LF", () => {
  assert.strictEqual(normalizeLineEndings("hello\r\nworld"), "hello\nworld");
  assert.strictEqual(normalizeLineEndings("a\r\nb\r\nc"), "a\nb\nc");
});

test("normalizeLineEndings leaves LF unchanged when target is LF", () => {
  assert.strictEqual(normalizeLineEndings("hello\nworld"), "hello\nworld");
});

test("normalizeLineEndings converts LF to CRLF when target is crlf", () => {
  assert.strictEqual(normalizeLineEndings("hello\nworld", "crlf"), "hello\r\nworld");
  assert.strictEqual(normalizeLineEndings("a\nb\nc", "crlf"), "a\r\nb\r\nc");
});

test("normalizeLineEndings handles mixed line endings", () => {
  assert.strictEqual(normalizeLineEndings("a\r\nb\nc", "lf"), "a\nb\nc");
  assert.strictEqual(normalizeLineEndings("a\r\nb\nc", "crlf"), "a\r\nb\r\nc");
});

test("normalizeLineEndings handles empty string", () => {
  assert.strictEqual(normalizeLineEndings(""), "");
});
