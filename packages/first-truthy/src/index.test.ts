import { test } from "node:test";
import assert from "node:assert";
import { firstTruthy } from "./index.js";

test("firstTruthy returns first truthy value", () => {
  assert.strictEqual(firstTruthy([false, 0, "", "hello", "world"]), "hello");
  assert.strictEqual(firstTruthy([null, undefined, 123, 456]), 123);
  assert.strictEqual(firstTruthy([false, true, false]), true);
});

test("firstTruthy returns undefined if all falsy", () => {
  assert.strictEqual(firstTruthy([false, 0, "", null, undefined]), undefined);
  assert.strictEqual(firstTruthy([]), undefined);
});

test("firstTruthy handles mixed types", () => {
  assert.deepStrictEqual(firstTruthy([0, "", [], "test"]), []);
  assert.deepStrictEqual(firstTruthy([0, "", {}, "test"]), {});
});

test("firstTruthy returns first truthy even if later values are truthy", () => {
  assert.strictEqual(firstTruthy([false, "first", "second"]), "first");
});
