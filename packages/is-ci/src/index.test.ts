import { test } from "node:test";
import assert from "node:assert";
import { isCi } from "./index.js";

test("isCi returns false when no CI env vars are set", () => {
  const originalEnv = process.env.CI;
  delete process.env.CI;
  delete process.env.GITHUB_ACTIONS;
  delete process.env.GITLAB_CI;
  delete process.env.CIRCLECI;
  delete process.env.JENKINS;
  delete process.env.TRAVIS;
  delete process.env.APPVEYOR;
  delete process.env.TEAMCITY_VERSION;
  delete process.env.CONTINUOUS_INTEGRATION;
  delete process.env.BUILD_NUMBER;
  delete process.env.RUN_ID;
  
  assert.strictEqual(isCi(), false);
  
  if (originalEnv !== undefined) {
    process.env.CI = originalEnv;
  }
});

test("isCi returns true when CI env var is set", () => {
  const originalCi = process.env.CI;
  process.env.CI = "true";
  assert.strictEqual(isCi(), true);
  if (originalCi !== undefined) {
    process.env.CI = originalCi;
  } else {
    delete process.env.CI;
  }
});

test("isCi returns true when GITHUB_ACTIONS is set", () => {
  const original = process.env.GITHUB_ACTIONS;
  process.env.GITHUB_ACTIONS = "true";
  assert.strictEqual(isCi(), true);
  if (original !== undefined) {
    process.env.GITHUB_ACTIONS = original;
  } else {
    delete process.env.GITHUB_ACTIONS;
  }
});
