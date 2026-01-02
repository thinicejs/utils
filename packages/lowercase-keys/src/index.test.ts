import { test } from "node:test";
import assert from "node:assert";
import { lowercaseKeys } from "./index.js";

test("lowercaseKeys lowercases all keys", () => {
  const input = { Hello: 1, WORLD: 2, Test: 3 };
  const output = lowercaseKeys(input);
  assert.deepStrictEqual(output, { hello: 1, world: 2, test: 3 });
});

test("lowercaseKeys handles already lowercase keys", () => {
  const input = { hello: 1, world: 2 };
  const output = lowercaseKeys(input);
  assert.deepStrictEqual(output, { hello: 1, world: 2 });
});

test("lowercaseKeys handles mixed case", () => {
  const input = { HelloWorld: 1, testCase: 2, UPPER: 3 };
  const output = lowercaseKeys(input);
  assert.deepStrictEqual(output, { helloworld: 1, testcase: 2, upper: 3 });
});

test("lowercaseKeys handles empty object", () => {
  assert.deepStrictEqual(lowercaseKeys({}), {});
});

test("lowercaseKeys does not recurse into nested objects", () => {
  const input = { Hello: { World: 1 } };
  const output = lowercaseKeys(input);
  assert.deepStrictEqual(output, { hello: { World: 1 } });
});
