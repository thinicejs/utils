import { test } from "node:test";
import assert from "node:assert";
import { lastItem } from "./index.js";

test("lastItem returns last item", () => {
  assert.strictEqual(lastItem([1, 2, 3]), 3);
  assert.strictEqual(lastItem(["a", "b", "c"]), "c");
  assert.strictEqual(lastItem([true, false]), false);
});

test("lastItem returns item for single element array", () => {
  assert.strictEqual(lastItem([42]), 42);
});

test("lastItem returns undefined for empty array", () => {
  assert.strictEqual(lastItem([]), undefined);
});

test("lastItem handles mixed types", () => {
  assert.strictEqual(lastItem([1, "two", null]), null);
  assert.strictEqual(lastItem([undefined, "value"]), "value");
});
