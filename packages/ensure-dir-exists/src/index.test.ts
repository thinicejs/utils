import { test } from "node:test";
import assert from "node:assert";
import { mkdtemp, rm, access } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { ensureDirExists } from "./index.js";

test("ensureDirExists creates directory if missing", async () => {
  const tempDir = await mkdtemp(join(tmpdir(), "ensure-dir-test-"));
  const testDir = join(tempDir, "new-dir");
  
  await ensureDirExists(testDir);
  
  await access(testDir); // Should not throw
  
  await rm(tempDir, { recursive: true, force: true });
});

test("ensureDirExists does nothing if directory exists", async () => {
  const tempDir = await mkdtemp(join(tmpdir(), "ensure-dir-test-"));
  
  await ensureDirExists(tempDir);
  await ensureDirExists(tempDir); // Should not throw
  
  await rm(tempDir, { recursive: true, force: true });
});
