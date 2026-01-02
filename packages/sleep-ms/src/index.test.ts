import { test } from "node:test";
import assert from "node:assert";
import { sleepMs } from "./index.js";

test("sleepMs waits for specified milliseconds", async () => {
  const start = Date.now();
  await sleepMs(50);
  const elapsed = Date.now() - start;
  assert.ok(elapsed >= 45 && elapsed < 100, `Expected ~50ms, got ${elapsed}ms`);
});

test("sleepMs handles zero delay", async () => {
  const start = Date.now();
  await sleepMs(0);
  const elapsed = Date.now() - start;
  assert.ok(elapsed < 10);
});

test("sleepMs returns a promise", () => {
  const result = sleepMs(10);
  assert.ok(result instanceof Promise);
});
