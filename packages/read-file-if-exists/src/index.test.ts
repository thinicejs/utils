import { test } from "node:test";
import assert from "node:assert";
import { writeFile, unlink, mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { readFileIfExists } from "./index.js";

test("readFileIfExists returns file contents when file exists", async () => {
  const tempDir = await mkdtemp(join(tmpdir(), "read-file-test-"));
  const filePath = join(tempDir, "test.txt");
  const content = "hello world";
  
  await writeFile(filePath, content);
  const result = await readFileIfExists(filePath);
  
  assert.strictEqual(result, content);
  
  await unlink(filePath);
});

test("readFileIfExists returns undefined when file does not exist", async () => {
  const tempDir = await mkdtemp(join(tmpdir(), "read-file-test-"));
  const filePath = join(tempDir, "nonexistent.txt");
  
  const result = await readFileIfExists(filePath);
  
  assert.strictEqual(result, undefined);
});

test("readFileIfExists handles custom encoding", async () => {
  const tempDir = await mkdtemp(join(tmpdir(), "read-file-test-"));
  const filePath = join(tempDir, "test.txt");
  const content = "hello world";
  
  await writeFile(filePath, content);
  const result = await readFileIfExists(filePath, "utf8");
  
  assert.strictEqual(result, content);
  
  await unlink(filePath);
});
