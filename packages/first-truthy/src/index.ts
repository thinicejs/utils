/**
 * Returns the first truthy value in an array.
 */
export function firstTruthy<T>(arr: T[]): T | undefined {
  for (const item of arr) {
    if (item) {
      return item;
    }
  }
  return undefined;
}
