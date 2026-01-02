/**
 * JSON.parse that returns undefined on failure.
 */
export function safeJsonParse<T = unknown>(str: string): T | undefined {
  try {
    return JSON.parse(str) as T;
  } catch {
    return undefined;
  }
}
