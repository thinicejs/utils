import { isArray } from "@thinice/is-array";

/**
 * Flattens an array one level deep.
 */
export function flattenShallow<T>(arr: (T | T[])[]): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}
