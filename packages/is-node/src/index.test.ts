import { test } from "node:test";
import assert from "node:assert";
import { isNode } from "./index.js";

test("isNode returns true in Node.js", () => {
  assert.strictEqual(isNode(), true);
});
