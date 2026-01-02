import { test } from "node:test";
import assert from "node:assert";
import { withTimeout } from "./index.js";

test("withTimeout resolves if promise resolves before timeout", async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("success"), 10);
  });
  const result = await withTimeout(promise, 100);
  assert.strictEqual(result, "success");
});

test("withTimeout rejects if promise takes too long", async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("success"), 200);
  });
  try {
    await withTimeout(promise, 50);
    assert.fail("Should have timed out");
  } catch (error) {
    assert.ok(error instanceof Error);
    assert.ok(error.message.includes("timed out"));
  }
});

test("withTimeout uses custom timeout error", async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("success"), 200);
  });
  const customError = new Error("Custom timeout");
  try {
    await withTimeout(promise, 50, customError);
    assert.fail("Should have timed out");
  } catch (error) {
    assert.strictEqual(error, customError);
  }
});

test("withTimeout handles already resolved promise", async () => {
  const promise = Promise.resolve("immediate");
  const result = await withTimeout(promise, 100);
  assert.strictEqual(result, "immediate");
});

test("withTimeout handles already rejected promise", async () => {
  const promise = Promise.reject(new Error("original error"));
  try {
    await withTimeout(promise, 100);
    assert.fail("Should have rejected");
  } catch (error) {
    assert.ok(error instanceof Error);
    assert.strictEqual(error.message, "original error");
  }
});
