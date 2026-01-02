import { readFile } from "node:fs/promises";

/**
 * Returns file contents or undefined (doesn't throw).
 */
export async function readFileIfExists(
  filePath: string,
  encoding: BufferEncoding = "utf8"
): Promise<string | undefined> {
  try {
    return await readFile(filePath, encoding);
  } catch {
    return undefined;
  }
}
