import { test } from "node:test";
import assert from "node:assert";
import { noopPromise } from "./index.js";

test("noopPromise returns a resolved promise", async () => {
  const promise = noopPromise();
  assert.ok(promise instanceof Promise);
  await promise;
});

test("noopPromise resolves immediately", async () => {
  await noopPromise();
  assert.ok(true);
});
