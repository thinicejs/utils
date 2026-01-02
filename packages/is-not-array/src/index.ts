import { isArray } from "@thinice/is-array";

/**
 * Type guard to check if a value is NOT an array.
 */
export function isNotArray<T>(value: unknown): value is Exclude<unknown, T[]> {
  return !isArray(value);
}
