import { test } from "node:test";
import assert from "node:assert";
import { stableObjectKeys } from "./index.js";

test("stableObjectKeys returns sorted keys", () => {
  const input = { z: 1, a: 2, m: 3 };
  const output = stableObjectKeys(input);
  assert.deepStrictEqual(output, ["a", "m", "z"]);
});

test("stableObjectKeys handles already sorted keys", () => {
  const input = { a: 1, b: 2, c: 3 };
  const output = stableObjectKeys(input);
  assert.deepStrictEqual(output, ["a", "b", "c"]);
});

test("stableObjectKeys handles empty object", () => {
  assert.deepStrictEqual(stableObjectKeys({}), []);
});

test("stableObjectKeys handles numeric string keys", () => {
  const input = { "10": 1, "2": 2, "1": 3 };
  const output = stableObjectKeys(input);
  assert.deepStrictEqual(output, ["1", "10", "2"]);
});

test("stableObjectKeys is deterministic", () => {
  const input = { z: 1, a: 2, m: 3 };
  const output1 = stableObjectKeys(input);
  const output2 = stableObjectKeys(input);
  assert.deepStrictEqual(output1, output2);
});
