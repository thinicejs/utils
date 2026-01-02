import { test } from "node:test";
import assert from "node:assert";
import { onceAsync } from "./index.js";

test("onceAsync ensures function only runs once", async () => {
  let callCount = 0;
  const fn = async () => {
    callCount++;
    return callCount;
  };
  const onceFn = onceAsync(fn);
  
  const result1 = onceFn();
  const result2 = onceFn();
  const result3 = onceFn();
  
  await Promise.all([result1, result2, result3]);
  
  assert.strictEqual(callCount, 1);
  assert.strictEqual(await result1, 1);
  assert.strictEqual(await result2, 1);
  assert.strictEqual(await result3, 1);
});

test("onceAsync returns same promise for concurrent calls", async () => {
  const fn = async () => ({ value: Math.random() });
  const onceFn = onceAsync(fn);
  
  const promise1 = onceFn();
  const promise2 = onceFn();
  
  assert.strictEqual(promise1, promise2);
  
  const result1 = await promise1;
  const result2 = await promise2;
  
  assert.deepStrictEqual(result1, result2);
});

test("onceAsync passes arguments correctly", async () => {
  const fn = async (a: number, b: string): Promise<{ a: number; b: string }> => ({ a, b });
  const onceFn = onceAsync(fn);
  
  const result = await onceFn(1, "test");
  assert.deepStrictEqual(result, { a: 1, b: "test" });
});
