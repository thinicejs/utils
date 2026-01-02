import { sleepMs } from "@thinice/sleep-ms";
import { toString } from "@thinice/to-string";

/**
 * Retries an async function N times with optional delay.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { attempts?: number; delay?: number } = {}
): Promise<T> {
  const { attempts = 3, delay = 0 } = options;
  let lastError: Error;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(toString(error));
      if (i < attempts - 1 && delay > 0) {
        await sleepMs(delay);
      }
    }
  }

  throw lastError!;
}
