import { mkdir } from "node:fs/promises";
import { access } from "node:fs/promises";

/**
 * Creates a directory if missing (no recursion drama).
 */
export async function ensureDirExists(dirPath: string): Promise<void> {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath);
  }
}
