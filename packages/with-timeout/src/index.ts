/**
 * Wraps a promise with a timeout (no retries, no cancelation).
 */
export function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  timeoutError?: Error
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => {
        reject(timeoutError || new Error(`Promise timed out after ${ms}ms`));
      }, ms);
    }),
  ]);
}
