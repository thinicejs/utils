import { test } from "node:test";
import assert from "node:assert";
import { safeTrim } from "./index.js";

test("safeTrim trims strings", () => {
  assert.strictEqual(safeTrim("  hello  "), "hello");
  assert.strictEqual(safeTrim("  world  "), "world");
  assert.strictEqual(safeTrim("\n\t  test  \n\t"), "test");
});

test("safeTrim returns non-strings unchanged", () => {
  assert.strictEqual(safeTrim(null), null);
  assert.strictEqual(safeTrim(undefined), undefined);
  assert.strictEqual(safeTrim(123), 123);
  assert.strictEqual(safeTrim(true), true);
  assert.deepStrictEqual(safeTrim([1, 2, 3]), [1, 2, 3]);
  assert.deepStrictEqual(safeTrim({ a: 1 }), { a: 1 });
});

test("safeTrim handles empty string", () => {
  assert.strictEqual(safeTrim(""), "");
  assert.strictEqual(safeTrim("   "), "");
});
