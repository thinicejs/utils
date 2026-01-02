import { test } from "node:test";
import assert from "node:assert";
import { retry } from "./index.js";

test("retry succeeds on first attempt", async () => {
  let callCount = 0;
  const fn = async () => {
    callCount++;
    return "success";
  };
  
  const result = await retry(fn);
  assert.strictEqual(result, "success");
  assert.strictEqual(callCount, 1);
});

test("retry retries on failure", async () => {
  let callCount = 0;
  const fn = async () => {
    callCount++;
    if (callCount < 3) {
      throw new Error("fail");
    }
    return "success";
  };
  
  const result = await retry(fn, { attempts: 3 });
  assert.strictEqual(result, "success");
  assert.strictEqual(callCount, 3);
});

test("retry throws after max attempts", async () => {
  let callCount = 0;
  const fn = async () => {
    callCount++;
    throw new Error("always fails");
  };
  
  try {
    await retry(fn, { attempts: 3 });
    assert.fail("Should have thrown");
  } catch (error) {
    assert.ok(error instanceof Error);
    assert.strictEqual(error.message, "always fails");
    assert.strictEqual(callCount, 3);
  }
});

test("retry uses custom delay", async () => {
  let callCount = 0;
  const fn = async () => {
    callCount++;
    if (callCount < 2) {
      throw new Error("fail");
    }
    return "success";
  };
  
  const start = Date.now();
  const result = await retry(fn, { attempts: 2, delay: 50 });
  const elapsed = Date.now() - start;
  
  assert.strictEqual(result, "success");
  assert.ok(elapsed >= 45 && elapsed < 100, `Expected ~50ms delay, got ${elapsed}ms`);
});

test("retry uses default attempts", async () => {
  let callCount = 0;
  const fn = async () => {
    callCount++;
    if (callCount < 3) {
      throw new Error("fail");
    }
    return "success";
  };
  
  const result = await retry(fn);
  assert.strictEqual(result, "success");
  assert.strictEqual(callCount, 3);
});
