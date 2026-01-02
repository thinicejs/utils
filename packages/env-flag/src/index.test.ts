import { test } from "node:test";
import assert from "node:assert";
import { envFlag } from "./index.js";

test("envFlag returns true for truthy values", () => {
  const original = process.env.TEST_FLAG;
  process.env.TEST_FLAG = "true";
  assert.strictEqual(envFlag("TEST_FLAG"), true);
  process.env.TEST_FLAG = "1";
  assert.strictEqual(envFlag("TEST_FLAG"), true);
  process.env.TEST_FLAG = "yes";
  assert.strictEqual(envFlag("TEST_FLAG"), true);
  if (original !== undefined) {
    process.env.TEST_FLAG = original;
  } else {
    delete process.env.TEST_FLAG;
  }
});

test("envFlag returns false for falsy values", () => {
  const original = process.env.TEST_FLAG;
  process.env.TEST_FLAG = "false";
  assert.strictEqual(envFlag("TEST_FLAG"), false);
  process.env.TEST_FLAG = "0";
  assert.strictEqual(envFlag("TEST_FLAG"), false);
  process.env.TEST_FLAG = "";
  assert.strictEqual(envFlag("TEST_FLAG"), false);
  if (original !== undefined) {
    process.env.TEST_FLAG = original;
  } else {
    delete process.env.TEST_FLAG;
  }
});

test("envFlag returns defaultValue when env var is undefined", () => {
  const original = process.env.TEST_FLAG;
  delete process.env.TEST_FLAG;
  assert.strictEqual(envFlag("TEST_FLAG", false), false);
  assert.strictEqual(envFlag("TEST_FLAG", true), true);
  if (original !== undefined) {
    process.env.TEST_FLAG = original;
  }
});

test("envFlag is case insensitive for false", () => {
  const original = process.env.TEST_FLAG;
  process.env.TEST_FLAG = "FALSE";
  assert.strictEqual(envFlag("TEST_FLAG"), false);
  process.env.TEST_FLAG = "False";
  assert.strictEqual(envFlag("TEST_FLAG"), false);
  if (original !== undefined) {
    process.env.TEST_FLAG = original;
  } else {
    delete process.env.TEST_FLAG;
  }
});
