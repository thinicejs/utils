/**
 * Ensures an async function only runs once.
 */
export function onceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T
): T {
  let promise: ReturnType<T> | undefined;
  return ((...args: Parameters<T>): ReturnType<T> => {
    if (!promise) {
      promise = fn(...args) as ReturnType<T>;
    }
    return promise;
  }) as unknown as T;
}
